## what could be

- observer pattern
	- have the inputs **react** to the changes made on the underlying objects
- state pattern
	- not needed, but might be good to see how it would work
- experiment with TS and JS access to private fields and other **hidden** program elements(objects)
- provide a mechanism to **permanently store** the tasks
> 	- further, store the rest of the information such as the **history** list
		- what about the current config?

## questions

- How to allow for **modularity** and for quickly switching between views without doing too much rewriting of components and still preserving object encapsulation?
- How do things get removed from the screen?
	- what best practices are there for this? Would a [[Frontend Framework]] be a better option?

## notes 📔

- different views of the tasks could be located within a single **generic** task List
	- this would allow for the views to be interchangable while still preserving the outermost functionality
	- would not require inheritance and would make the View form composable and the actual  
	- the wording seems to be a big problem here

## observations 👁‍🗨

- it is really good to separate the initialization of an object(or app) from the rest
	- provides a nice overview of what is dynamic and what cannot change
- on the **UI**
	- having the different layout options separated into specific classes can work really well
		- they need to be connected via an interface([[Strategy pattern]])
	- having the different UI elements encapsulate one another can also work well, even when they are quite specific
		- the different components can all work with the same data
			- this can also present challenges and might necessitate a [[Mediator]] to work as a coordinator object between the components, see also [[MVC]]
	- It is very difficult to make sure a portion of the UI get's removed when the component is removed
		- this is done much better using a [[Frontend Framework]] such as [[Atlas/Knowledge/Education/React/react]]
