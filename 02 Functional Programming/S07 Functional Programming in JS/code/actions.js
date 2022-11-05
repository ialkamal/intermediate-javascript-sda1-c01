import { reduce } from "./reducer";

export const ADD_ITEM = "ADD_ITEM";

export function addTask(newTask) {
  return reduce(newTask, ADD_ITEM);
}
