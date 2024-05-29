import createToDo from './create-ToDos';


// Import CSS Files
import './style.css';

const showModalTask = document.querySelector("#add_new_todo_task_dialog");
const showModalProject = document.querySelector("#add_new_project_dialog");
const newTaskBtn = document.querySelector("#add_new_todo_task_btn");
const newProjectBtn = document.querySelector("#add_new_todo_project_btn");

newTaskBtn.addEventListener("click", () => {
    showModalTask.showModal();
});
// newProjectBtn.addEventListener("click", () => {
//     showModalProject.showModal();
// });


const globalList = createToDo();

newProjectBtn.addEventListener("click", () => {
    globalList.addNewTasktoList();
    console.log(globalList.toDoList);
});


const newTodoDialog = document.querySelector("dialog");

newTodoDialog.addEventListener("click", (e) => {
    console.log(e.target.localName);
    console.log(e.target);
    globalList.closeNewTaskModal(e);
});
// Close modal when clicking outside the Dialog