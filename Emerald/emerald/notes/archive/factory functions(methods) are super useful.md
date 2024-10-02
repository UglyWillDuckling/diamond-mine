They are particular good when the objects they're creating are simple and they only need to encapsulate the decision mechanism between the possible implementations.

```ts
type listingOption = 'list' | 'kanban'
function makeListing(taskList: TaskList, list_type: listingOption): TaskListing {
  switch (list_type) {
    case 'list':
      return new TaskListComponent(taskList)
    case 'kanban':
      return new KanbanComponent(taskList)
  }
}
```

==the only thing that the function does is switch between the implementations==

- @ factory methods can be combined with builders as well like with **test builders** where they are used to quickly build a `default` builder
- [x] remind (@2024-09-16 10:32)

## relates to
[[Refactoring]]
[[Factory Method]]
[[Abstract Factory Pattern]]

