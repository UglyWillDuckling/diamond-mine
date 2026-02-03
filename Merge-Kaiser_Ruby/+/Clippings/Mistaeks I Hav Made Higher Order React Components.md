---
source: http://natpryce.com/articles/000814.html
author:
  - "[[Nat Pryce]]"
  - "[[&copy; Jezikoslovac.com]]"
part of:
  - "[[Mistaeks I Hav Made]]"
published: 2015-06-11
created: 2025-03-30
tags:
  - article/react
---
## [[Higher Order React Components]]

When writing user interfaces with the React framework, I often find that several of my components have similar behaviour. For example, I may have several components that display the eventual value of a [promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise), or display changing values of an [Rx event stream](https://github.com/Reactive-Extensions/RxJS), or are sources or targets for drag-and-drop interactions, and so on. I want to define these common behaviours once and compose them into my component classes where required. This, in a nutshell, is what “higher-order components” do.

## An Example Use Case for Higher-Order Components

Imagine we’re writing an international e-commerce site.

When a customer uses the site, the information they see is localised for the country in which they reside. The site uses the user’s country to determine the currency in which to display prices, calculate shipping costs, etc. The site displays the customer’s country in the navigation bar at the top of each page. If the user is travelling, they can select their preferred country from a menu of countries supported by the site.

Both the country associated with the user’s session and the list of all countries supported by the application are fetched by HTTP from the server in JSON format and displayed by React components.

For example, the user’s country is served as:

```json
{"iso": "gb", "name": "United Kingdom"}
```

And the list of supported countries is served as:

```json
[
  {"iso": "fr", "name": "France"},
  {"iso": "gb", "name": "United Kingdom"},
  ...
]
```

The Country component below displays the user’s preferred country. Because country data is received asynchronously, the Country component must be given a *promise* of the country information. While the promise is pending, the component displays a loading indicator. When the promise is resolved successfully, the component displays the country information as a flag icon and name. If the promise is rejected, the component displays an error message.

```javascript
class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, country: null};
    }
    
    componentDidMount() {
        this.props.promise.then(
            value => this.setState({loading: false, country: value}),
            error => this.setState({loading: false, error: error}));
    }
    
    render() {
        if (this.state.loading) {
            return <span>Loading...</span>;
        }
        else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        }
        else {
            var iso = this.state.country.iso;
            var name = this.state.country.name;
            
            return (
                <span className="country">
                    <span className={"flag-icon flag-icon-"+iso}/>
                    <span className="country-name">{name}</span>
                </span>
            );
        }
    }
}
```

It can be used like this (assuming fetchJson starts loading JSON from a URL and returns a promise of the JSON):

```javascript
<Country promise={fetchJson('/api/country.json')}/>
```

The CountryChooser component below displays the list of available countries, which are also passed to it as a promise:

```javascript
class CountryChooser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, countries: null};
    }
    
    componentDidMount() {
        this.props.promise.then(
            value => this.setState({loading: false, countries: value}),
            error => this.setState({loading: false, error: error}));
    }
    
    render() {
        if (this.state.loading) {
            return <span>Loading...</span>;
        }
        else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        }
        else {
            return (
                <ul className="country-chooser">
                    {this.state.countries.map(c => 
                        <li key={c.iso} onClick={() => this.props.onSelect(c.iso)}>
                            <span className="country">
                                <span className={"flag-icon flag-icon-"+c.iso}/>
                                <span className="country-name">{c.name}</span>
                            </span>
                        </li>)
                    }
                </ul>
            );
        }
    }
}
```

It can be used like this (assuming the same fetchJson function and a changeUsersPreferredCountry function that sends the change of country to the server):

```javascript
<CountryChooser promise={fetchJson('/api/countries.json')} 
                onSelect={changeUsersPreferredCountry}/>
```

There’s a lot of duplication between the two components.

They duplicate the state machine required to receive and render data obtained asynchronously from a promise. These are not the only React components in the application that need to display data loaded asynchronously from the server, so addressing that duplication will shrink the code significantly.

The CountryChooser component cannot use the Country component to display the countries in the list because the event handling is intermingled with the presentation of the data. It therefore duplicates the code to render a country as HTML. We don’t want these HTML fragments diverging, because that will then create further duplication in our CSS stylesheets.

What can we do?

We can’t achieve what we want with parent/child relationships between components, where a parent component handles the promise events and child components render the promised value. Child component props are specified in the code that creates the component hierarchy, but at that point the we do not know the prop values. We want to calculate the props *dynamically*, when the promise is resolved.

We could extract the promise event handling into a base class. But JavaScript only supports single inheritance, so if our components inherit event handling for promises, they cannot inherit base classes that provide event handling for other things, such as user interaction . And although it disentangles the promise event handling from the rendering, it doesn’t disentangle the rendering from the promise event handling, so we still couldn’t use the Country component within the CountryChooser.

It sounds like a job for mixins, but React’s mixins don’t work with ES6 classes and are going to be dropped from the API.

The solution is a higher-order component.

## Higher-Order Components

A higher-order component is merely a function from component class to component class. The function takes a component class as a parameter and returns a new component class that wraps useful functionality around the class passed in . If you’re familiar with the “Gang of Four” design patterns and are thinking “Decorator pattern”, you’re pretty much bang on.

As a shorthand, in the rest of this article, and to avoid confusion with [ES7 decorators](https://github.com/wycats/javascript-decorators), I’m going to call class passed to the function the “wrapped class”, the class returned by the function the “wrapper class”, and the function itself as the “higher-order component”. I’ll use “wrapped component” and “wrapper component” to mean instances of the wrapped and wrapper classes.

A wrapper component usually handles events on behalf of the wrapped component. It maintains some state and communicates with the wrapped component by passing state values and callbacks to the wrapped component via its props.

Let’s assume we have a higher-order component called Promised that translates a promise of a value into props for a wrapped component. The wrapper component performs all the state management required to use the promise. This means that wrapped components can be stateless, only concerned with presentation.

The Country component now only needs to display to country information:

```javascript
var Country = ({name, iso}) => 
    <span className="country">
        <span className={"flag-icon flag-icon-"+iso}/>
        <span className="country-name">{name}</span>
    </span>;
```

To define a component that receives the country information asynchronously as a promise, we decorate it with the Promised higher-order component:

```javascript
var AsyncCountry = Promised(Country);
```

The CountryChooser can also be written as a stateless component, and can now use the Country component to display each country:

```javascript
var CountryChooser = ({countries, onSelect}) =>
    <ul className="country-chooser">
    { 
        countries.map(c => 
            <li key={c.iso} onClick={() => onSelect(c.iso)}>
                <Country {...c}/>
            </li>)
    }
    </ul>;
```

And can also be wrapped with Promised to receive the list of countries as a promise:

```javascript
var AsyncCountryChooser = Promised(CountryChooser);
```

By moving state management into a generic higher-order component, we have made our application-specific components both simpler and more useful, in that they can be used in more contexts.

## Implementing the Higher-Order Component

Here is the implementation of the Promised function:

```javascript
var React = require('react');
var R = require('ramda');

var Promised = Wrapped => class Promised extends React.Component {        // (1)
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, value: null};           
    }

    componentDidMount() {
        this.props.promise.then(                                          // (2)
            value => this.setState({loading: false, value: value}),
            error => this.setState({loading: false, error: error}));
    }
    
    render() {
        if (this.state.loading) {
            return <span>Loading...</span>;
        }
        else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        }
        else {
            var propsWithoutThePromise = R.dissoc('promise', this.props); // (3)
            return <Wrapped {...propsWithoutThePromise}
                            {...this.state.value}/>;
        }
    }
};
```
1. Promised is a function from one component class, named Wrapped in this example, to another class. Like a function, the returned class closes over definitions in the scope where it is defined, and so the methods of the class can refer the parameters and local variables of the function.
	The parameter name for the wrapped component must start with a with a capital letter so that the JSX compiler recognises it as a React component, rather than an HTML DOM element.
2. Client code passes a promise of props for the wrapped component to the wrapper as a prop named “promise”.
3. The wrapper passes all other props through to the wrapped component unchanged. This lets you configure a Promised(X) component with the same props you would use to configure an unwrapped X component. For example, you can initialise the wrapper with event callbacks that get passed to the wrapped component when it is rendered.
	When the wrapper renders the wrapped component, it creates the props for wrapped component by merging the properties of the promised value its own properties, except for the promise itself. The code above uses a [utility function from the Ramda library](http://ramdajs.com/docs/#dissoc) to remove the promise from the wrapper component’s props, and uses ES6 “spread” syntax to remove merge the props with the properties of the promise value.

## Massaging Props to Avoid Name Clash

The eagle eyed reader will have noticed that the AsyncCountryChooser has a slightly different API from the original CountryChooser component above. The original accepted a promise of an *array* of country objects. But the Promised wrapper uses the fields of the promised value as the props of the wrapped component, so the promised value must be an object with the array of country objects in a field named “countries”.

We can address that by mapping the array to an object when we create the promise:

```json
<AsyncCountryChooser 
    promise={fetchJson('/api/countries.json').then(list => {countries: list})} 
    onSelect={changeCountry}/>,
```

Another problem is that the current implementation reserves the prop name “promise”. This means we cannot pass a prop named “promise” through to the wrapped component. This could cause some head-scratching in the future as we evolve the system.

If it is to be compatible with arbitrary components, a higher-order component must provide a way to control the interface between the wrapper and wrapped components to avoid name clash and map the data provided by the wrapper to the props expected by the wrapped component. The most flexible method, which is most frequently by libraries published in NPM, is to parameterise the higher-order component with a function that maps the state and props of the wrapper component to props that are passed to the wrapped component. That way, the client code is in full control of the interface between the wrapper and wrappee and can programatically resolve any name clash. However, in this example, letting the caller name the promise prop and and using the promise’s `then` method to map the promised value to props of the wrapped component is good enough.

Because a Javascript class is a closure we can pass the name of the promise prop to the Promised function along with the class to be wrapped.

```javascript
var Promised = (promiseProp, Wrapped) => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, value: null};
    }
 
    componentDidMount() {
        this.props[promiseProp].then(
            value => this.setState({loading: false, value: value}),
            error => this.setState({loading: false, error: error}));
    }
       
    render() {
        if (this.state.loading) {
            return <span>Loading...</span>;
        }
        else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        }
        else {
            var propsWithoutThePromise = R.dissoc(promiseProp, this.props);
            return <Wrapped {...propsWithoutThePromise} {...this.state.value}/>;
        }
    }

};
```

We now have to name the promises when we apply the higher-order component to define new classes. But this lets us introduce better names into the code, which (in my opinion) is a good thing.

```javascript
var AsyncCountry = Promised("country", Country);
var AsyncCountryChooser = Promised("countries", CountryChooser);

...
<AsyncCountry country={fetchJson('/api/country.json')}/>

<AsyncCountryChooser countries={fetchJson('/api/countries.json').then(list => {countries: list})} 
                     onSelect={changeCountry}/>
```

Copyright © 2015 Nat Pryce. Posted 2015-11-06. [Share it.](http://www.reddit.com/submit?url=http://natpryce.com/articles/000814.html&title=Higher%20Order%20React%20Components "Share it on Reddit")

[^1]: for example, in recent project we needed to compose live updates, drag-source and drop-target behaviour into stateless rendering components

[^2]: actually, a higher-order component could take more than one components as parameters, but we only need one in this example