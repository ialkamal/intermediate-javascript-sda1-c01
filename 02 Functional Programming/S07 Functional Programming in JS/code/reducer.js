import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from "./actions";

export let store = {
  message: "Hi, this is session 07",
  todos: [{ id: 0, task: "Hi, this is a default task" }],
};

export function reduce(state, action) {
  switch (action) {
    case ADD_ITEM:
      let newID;
      !store.todos.length
        ? (newID = 0)
        : (newID = store.todos[store.todos.length - 1].id + 1);
      store = { ...store, todos: [...store.todos, { id: newID, task: state }] };
      break;
    case EDIT_ITEM:
      store = {
        ...store,
        todos: store.todos.map((todo) => {
          if (state.id === todo.id) todo.task = state.newTask;
          return todo;
        }),
      };
      break;
    case DELETE_ITEM:
      store = {
        ...store,
        todos: store.todos.filter((todo) => todo.id !== Number(state)),
      };
      break;
    default:
      break;
  }
  console.log("Store: ", store);
  return "state updated";
}
