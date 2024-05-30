// JS Modules
import createToDo from './create-ToDos';
import closeNewTaskModal from './manage-modals';

// Import CSS Files
import './style.css';



// Dialog Event Listeners

    // New Task Section
function newTaskEventListener() {

    // Add new Task
    const showModalTask = document.querySelector("#add_new_todo_task_dialog");
    const newTaskBtn = document.querySelector("#add_new_todo_task_btn");

    newTaskBtn.addEventListener("click", () => {
        showModalTask.showModal();
    });

    // Create Task
    const addNewTaskBtn = document.querySelector("#new_task_create_btn");
    const globalList = createToDo();
    const closeDialog = closeNewTaskModal()

    addNewTaskBtn.addEventListener("click", e => {
        console.log(closeDialog);
        console.log(globalList.toDoList);
    });

}

const newTaskDialog = newTaskEventListener();



    // New Project Section
// function newProjectEventListener() {

//     const showModalProject = document.querySelector("#add_new_project_dialog");
//     const newProjectBtn = document.querySelector("#add_new_todo_project_btn");

//     newProjectBtn.addEventListener("click", () => {
//         showModalProject.showModal();
//     });
// }



