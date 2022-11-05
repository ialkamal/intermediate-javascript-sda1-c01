import { ADD_ITEM } from "./actions";

export let store = {
  message: "Hi, this is session 07",
  todos: [{ id: 0, task: "Hi, this is a default task" }],
};

export function reduce(state, action) {
  switch (action) {
    case ADD_ITEM:
      //assign id with length
      let newID;
      !store.todos.length
        ? (newID = 0)
        : (newID = store.todos[store.todos.length - 1].id + 1);
      store = { ...store, todos: [...store.todos, { id: newID, task: state }] };
      break;
    default:
      break;
  }
  console.log("Store: ", store);
  return "state updated";
}
