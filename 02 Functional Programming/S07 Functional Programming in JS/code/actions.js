import { reduce } from "./reducer";

export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export function addTask(newTask) {
  return reduce(newTask, ADD_ITEM);
}

export function editTask(id, newTask) {
  return reduce({ id, newTask }, EDIT_ITEM);
}

export function deleteTask(id) {
  return reduce(id, DELETE_ITEM);
}
