import { addTask } from "./actions";
import { store } from "./reducer";

function render() {
  const root = document.getElementById("root");
  root.innerHTML = "";
  root.appendChild(App());
}

function App() {
  const html = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.textContent = "State Management";
  html.appendChild(h1);

  const input = document.createElement("input");
  input.placeholder = "add a new task!";
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask(e.target.value);
      e.target.value = "";
      render();
    }
  });
  html.appendChild(input);

  const list = document.createElement("div");
  store.todos.map((todo) => {
    const task = document.createElement("p");
    task.textContent = todo.task;
    list.appendChild(task);
  });
  html.appendChild(list);

  return html;
}

render();
