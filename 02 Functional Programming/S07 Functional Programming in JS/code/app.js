import { addTask, deleteTask, editTask } from "./actions";
import { store } from "./reducer";

let editCond = { state: false, id: null };

function render() {
  const root = document.getElementById("root");
  root.innerHTML = "";
  root.appendChild(App());
}

function App() {
  const html = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.textContent = "My ToDo App";
  html.appendChild(h1);

  //Input Field
  const input = document.createElement("input");
  input.placeholder = "add a new task!";
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      if (editCond.state === true) {
        editTask(editCond.id, e.target.value);
        editCond = { state: false, id: null };
      } else {
        addTask(e.target.value);
      }
      e.target.value = "";
      render();
    }
  });
  html.appendChild(input);

  //List of Tasks
  const taskList = document.createElement("div");
  taskList.style.display = "flex";
  taskList.style.flexDirection = "column";

  store.todos.map((todo) => {
    //Container to house task and buttons
    const taskContainer = document.createElement("div");
    taskContainer.style.display = "flex";

    //Task
    const task = document.createElement("p");
    task.textContent = todo.task;
    taskContainer.appendChild(task);

    //Delete Button
    const del = document.createElement("button");
    del.textContent = "x";
    del.style.height = "20px";
    del.style.margin = "15px 0 0 15px";
    del.setAttribute("data-id", todo.id);
    del.addEventListener("click", (e) => {
      deleteTask(e.target.getAttribute("data-id"));
      render();
    });
    taskContainer.appendChild(del);

    //Edit Button
    const edit = document.createElement("button");
    edit.textContent = "e";
    edit.classList = "edit";
    edit.style.height = "20px";
    edit.style.margin = "15px 0 0 15px";
    edit.setAttribute("data-id", todo.id);
    edit.addEventListener("click", (e) => {
      const [result] = store.todos.filter(
        (todo) => Number(e.target.getAttribute("data-id")) === Number(todo.id)
      );
      input.value = result.task;

      Array.from(document.getElementsByClassName("edit")).map(
        (button) => (button.disabled = false)
      );
      e.target.disabled = true;

      editCond = { state: true, id: todo.id };
    });
    taskContainer.appendChild(edit);

    taskList.appendChild(taskContainer);
  });
  html.appendChild(taskList);

  return html;
}

render();
