import './style.css';

const showModalTask = document.querySelector("#add_new_todo_task_dialog");
const showModalProject = document.querySelector("#add_new_project_dialog");
const newTaskBtn = document.querySelector("#add_new_todo_task_btn");
const newProjectBtn = document.querySelector("#add_new_todo_project_btn");

newTaskBtn.addEventListener("click", () => {
    showModalTask.showModal();
});
newProjectBtn.addEventListener("click", () => {
    showModalProject.showModal();
});