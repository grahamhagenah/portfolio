---
layout: project.njk
title: Scant Goods
subtitle: A full-stack, collaborative checklist application built with Remix.
tags: project
story: false
order: 1
stack: ['remix', 'react', 'fly.io']
live: https://goods.fly.dev
source: https://github.com/grahamhagenah/goods
intro:
  summary: Built with the full-stack framework Remix, this application allows users to create collaborative checklists that are always up-to-date.
  image: /assets/img/goods.webp
  preview: /assets/img/goods-preview.webp
  alt: ""
---

## User-Experience and Capabilities

The concept behind Scant Goods is to provide users with a way to share and track a  list of incomplete items - in this case, goods that are in short supply. I intended the app to be a shared grocery list, but it can work as a general project management tool.

When a user registers an account on the app, a function creates a new group in the database with the new user as its only member. Users can change the group name from the settings page, add or remove users, or swap into a new group.

When users are in the same group, they can view and edit a shared checklist. New items and mutations to existing items are logged into the database and synchronized with the front end for all users.

Selecting the ellipsis menu provides information on which user was the last to interact with a particular item and when they made the change.

The capabilities of this app are made possible by the full-stack framework Remix, a project from the team that created React Router.

<img class="content-img" src="/assets/img/goods-mobile.webp" alt="">

## Introduction to Remix

<a href="https://remix.run/" target="_blank">Remix</a> provides a powerful and efficient platform for building full-stack applications, with a focus on developer productivity, code quality, performance, security, and testing. As someone who primarily works with JavaScript and front-end technologies, it was empowering to be in control of the full stack. Remix makes interacting with the server to get data into components easy. I didn't have to worry about keeping the client-side state in sync with the server. By setting the state with mutations, the loaders take over to fetch the most up-to-date data and make updates to the component views. Remix is a perfect tool for applications with highly interactive user interfaces like this one.

## How Data Flows in Remix

A critical concept that I grappled with was data flow, how it differs from approaches I've used in the past, and the innovative possibilities it enables. It took some experimentation to understand the relationship between <em>Loaders</em>, <em>Components</em>, and <em>Actions</em>, but once I got it working, I was able to synchronize data across the network, client-side and server-side.

In this case, the loader returns an array of all the <em>complete</em> and <em>incomplete</em> items associated with a particular group.

```js
export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  const user = await getUserById(userId);
  const groupId = await user.groupId
  const allIncompleteGoods = await getAllIncompleteGoods({ groupId });
  const allCompleteGoods = await getAllCompleteGoods({ groupId });

  return json({ userId, allIncompleteGoods, allCompleteGoods, user, groupId });
}
```

The list of items is loaded into a component.

```jsx
...

  const data = useLoaderData<typeof loader>();
  
  return (
      <main>
        <details className="incomplete-goods">
          <summary>
            <h2>Incomplete</h2>
            <span className="counter">{data.allIncompleteGoods.length}</span>
          </summary>
          <ol>
            data.allIncompleteGoods.map((good) => 
              <GoodItem key={good.id} good={good} />
            )
          </ol>
        </details>
  ...
```

Finally, I wrote an action in a form to mutate the data, marking an item as either complete or incomplete, depending on its current state. The action optimistically updates the data in the component, which means the UI is updated to reflect the expected changes to the data. Then, the database is updated to synchronize with the client side.

```jsx
...

  const checked = fetcher.submission
    ? // optimistic version
      Boolean(fetcher.submission.formData.get("checked"))
    : // normal version
    good.completed || false;

 const actionValue = checked ? "restore" : "complete";

  function handleUpdate() {
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
    }, 1000)
  }

  return (
    <fetcher.Form method="post" onSubmit={handleUpdate}>
        <input type="hidden" name="id" value={good.id}></input>
        <label className="form-control">
          <input
            type="checkbox"
            name="_action"
            value={actionValue}
            checked={checked}
            onChange={(e) => fetcher.submit(e.target.form)}
          />
...
```

Data flows from the database through a loader into a component. Actions mutate the data, then ask the database to make an update. Data flow is cyclical in Remix, ensuring a close bond between the server and the client.
