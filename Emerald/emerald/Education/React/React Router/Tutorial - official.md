https://reactrouter.com/en/main/start/tutorial

---

- create a new project inside the study/react dir
	- use `Vite` [[Vite]]
	- and [[npm]]
- install react-router
- install tutorial specific stuff
- `run`

## Setup

```bash
npm create vite@latest name-of-your-project -- --template react
# follow prompts
cd <your new project directory>
npm install react-router-dom # always need this!
npm install localforage match-sorter sort-by # only for this tutorial.
npm run dev
```

👉 Copy/Paste the tutorial CSS found [here](https://gist.githubusercontent.com/ryanflorence/ba20d473ef59e1965543fa013ae4163f/raw/499707f25a5690d490c7b3d54c65c65eb895930c/react-router-6.4-tutorial-css.css) into src/index.css
👉 Copy/Paste the tutorial data module found [here](https://gist.githubusercontent.com/ryanflorence/1e7f5d3344c0db4a8394292c157cd305/raw/f7ff21e9ae7ffd55bfaaaf320e09c6a08a8a6611/contacts.js) into src/contacts.js
👉 Delete unused files in src/ so all you have left are these:
```
src
├── contacts.js
├── index.css
└── main.jsx
```

## Adding a router

👉 Create and render a browser router in main.jsx
```jsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

## The Root Route

👉 Create `src/routes` and `src/routes/root.jsx`

👉 Create the root layout component

```jsx
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}

```

👉 Set `<Root>` as the root route's element
```jsx
/* existing imports */
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

## Handling Not Found Errors

👉 Create an error page component

### create error page
```jsx
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

```

### set error page
👉 Set the `<ErrorPage>` as the errorElement on the root route

```jsx
/* previous imports */
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

## Contact route

### start
👉 Create the contact route module
```bash
touch src/routes/contact.jsx
```
#### UI
👉 Add the contact component UI
```jsx
import { Form } from "react-router-dom";

export default function Contact() {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://robohash.org/you.png?size=200x200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={
            contact.avatar ||
            `https://robohash.org/${contact.id}.png?size=200x200`
          }
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}

```

### Create the new route
`main.jsx`
```jsx
/* existing imports */
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);

/* existing code */
```

However, it's not inside of our root layout 😠

## Nested routes

We want the contact component to render inside of the `<Root>` layout like this.

### add child route
We do it by making the contact route a child of the root route.

`main.jsx`
```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
```

### Outlet
You'll now see the root layout again but a blank page on the right. We need to tell the root route where we want it to render its **child** routes. We do that with `<Outlet>`.

`root.jsx`
```jsx
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
```

## Client Side Routing
[[client side routing]]

<mark style="background: #FF5582A6;">You may or may not have noticed, but when we click the links in the sidebar, the browser is doing a full document request for the next URL instead of using React Router.</mark>

Client side routing allows our app to `update` the **URL** without requesting another document from the server. Instead, the app can <mark style="background: #ABF7F7A6;">immediately</mark> render **new UI**. Let's make it happen with `<Link>`.


### update sidebar

👉 Change the sidebar `<a href>` to `<Link to>`

`root.jsx`
```jsx
import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        {/* other elements */}

        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>

        {/* other elements */}
      </div>
    </>
  );
}

```

## Loading Data
URL segments, layouts, and data are more often than not coupled (tripled?) together. We can see it in this app already:

| URL Segment  | Component   | Data               |
| ------------ | ----------- | ------------------ |
| /            | `<Root>`    | list of contacts   |
| contacts/:id | `<Contact>` | individual contact |
> Because of this natural coupling, React Router has data conventions to get data into your route components easily.

There are two APIs we'll be using to load data, `loader` and `useLoaderData`. First we'll create and export a loader function in the root module, then we'll hook it up to the route. Finally, we'll access and render the data.

### Export a loader from `root.jsx`

### export

`root`
```jsx
import { Outlet, Link } from "react-router-dom";
import { getContacts } from "../contacts";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}
```

### configure on the route

👉 Configure the loader on the route

`main`
```jsx
/* other imports */
import Root, { loader as rootLoader } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
```

### Access data 🗃

`root`
```jsx
import {
  Outlet,
  Link,
  useLoaderData,
} from "react-router-dom";
import { getContacts } from "../contacts";

/* other code */

export default function Root() {
  const { contacts } = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        {/* other code */}

        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>

        {/* other code */}
      </div>
    </>
  );
}
```

That's it! React Router will now automatically keep that data in sync with your UI. We don't have any data yet, so you're probably getting a blank list like this:

## Data Writes + HTML Forms

We'll create our first contact in a second, but first let's talk about HTML.

React Router emulates HTML Form navigation as the data mutation primitive, according to web development before the JavaScript cambrian explosion. It gives you the UX capabilities of client rendered apps with the simplicity of the<mark style="background: #FFF3A3A6;"> "old school"</mark> web model.

While unfamiliar to some web developers, HTML **forms** actually cause a `navigation` in the browser, just like clicking a link. The only difference is in the **request**: links can only change the `URL` while forms can also change the <mark style="background: #ABF7F7A6;">request method</mark> (GET vs POST) and the <mark style="background: #ABF7F7A6;">request body </mark>(POST form data).

Without client side routing, the browser will serialize the form's data automatically and send it to the server as the request body for **POST**, and as `URLSearchParams` for **GET**. React Router does the same thing, except instead of sending the request to the server, it uses client side routing and sends it to a<mark style="background: #FFB8EBA6;"> route action</mark>.

We can test this out by clicking the "New" button in our app. The app should blow up because the Vite server isn't configured to handle a **POST** request (it sends a `404`, though it should probably be a `405` 🤷).

## Creating Contacts

We'll create new contacts by <mark style="background: #FFB86CA6;">exporting</mark> an action in our **root** route, wiring it up to the `route config`, and changing our `<form>` to a React Router `<Form>`.

### 👉 Create the action and change `<form>` to `<Form>`

`root`
```jsx
import {
  Outlet,
  Link,
  useLoaderData,
  Form,
} from "react-router-dom";
import { getContacts, createContact } from "../contacts";

export async function action() {
  const contact = await createContact();
  return { contact };
}

/* other code */

export default function Root() {
  const { contacts } = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          {/* other code */}
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>

        {/* other code */}
      </div>
    </>
  );
}
```

### 👉 Import and set the action on the route

`main`
```jsx
/* other imports */

import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
```

That's it! Go ahead and click the "New" button and you should see a new record pop into the list 🥳

The `createContact` method just creates an empty contact with no name or data or anything. But it does still create a record, promise!

>    🧐 Wait a sec ... How did the sidebar update? Where did we call the action? Where's the code to refetch the data? Where are useState, onSubmit and useEffect?!

This is where the "old school web" programming model shows up. As we discussed earlier, `<Form>` prevents the browser from sending the request to the server and sends it to your route action instead. In web semantics, a POST usually means some data is changing. By convention, **React Router** uses this as a hint to automatically revalidate the data on the page after the action finishes. That means all of your `useLoaderData` hooks update and the **UI** stays<mark style="background: #BBFABBA6;"> in sync</mark> with your data **automatically**! Pretty cool.

## URL Params in Loaders

👉 Click on the No Name record
We should be seeing our old static contact page again, with one difference: the URL now has a real ID for the record.

### 👉 Add a loader to the contact page and access data with useLoaderData

```jsx
import { Form, useLoaderData } from "react-router-dom";
import { getContact } from "../contacts";

export async function loader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}

export default function Contact() {
  const { contact } = useLoaderData();
  // existing code
}
```

### Configure the loader on the route

`main`
```jsx
/* existing code */
import Contact, {
  loader as contactLoader,
} from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
    ],
  },
]);

/* existing code */
```

## Updating Data

Just like creating data, you update data with `<Form>`. Let's make a new route at `contacts/:contactId/`edit. Again, we'll start with the `component` and then <mark style="background: #ABF7F7A6;">wire it up</mark> to the **route config**.

### Add Edit component

`src/routes/edit`
```jsx
import { Form, useLoaderData } from "react-router-dom";

export default function EditContact() {
  const { contact } = useLoaderData();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact?.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact?.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact?.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact?.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact?.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}
```

### Add edit route

`main`
```jsx
/* existing code */
import EditContact from "./routes/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
      },
    ],
  },
]);
/* existing code */
```

We want it to be rendered in the root route's outlet, so we made it a sibling to the existing child route.

> You might note we reused the contactLoader for this route. This is only because we're being **lazy** in the tutorial. There is no reason to attempt to share loaders among routes, they usually have their own.

## Updating Contacts with FormData
The edit route we just created already renders a `form`. All we need to do to update the record is wire up an <mark style="background: #ABF7F7A6;">action</mark> to the `route`. The form will `post` to the <mark style="background: #ABF7F7A6;">action</mark> and the data will be **automatically** revalidated.


### 👉 Add an action to the edit module

`main`
```jsx
import {
  Form,
  useLoaderData,
  redirect,
} from "react-router-dom";
import { updateContact } from "../contacts";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

/* existing code */
```
