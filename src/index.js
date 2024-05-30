// JS Modules
import createNewTask from './scripts/createNewTask';
import manageModals from './scripts/manageModals';
import createNewProject from './scripts/createNewProject';

// CSS Files
import './style.css';


// Dialog Event Listeners

    // New Task
function newTaskEventListener() {

    // Open New Task Modal
    const newTaskDialog = document.querySelector("#add_new_todo_task_dialog");
    const newTaskBtn = document.querySelector("#add_new_todo_task_btn");

    newTaskBtn.addEventListener("click", () => {
        newTaskDialog.showModal();
    });

    // Close the Modal when clicking outside it.
    const closeModals = manageModals()

    newTaskDialog.addEventListener("click", e => {
        closeModals.closeNewTaskModal(e, newTaskDialog);
    });

    // Create Task and add it to the List Container
    const addNewTaskBtn = document.querySelector("#new_task_create_btn");
    const createTask = createNewTask();

    addNewTaskBtn.addEventListener("click", (e) => {
        e.preventDefault();

        createTask.addNewTasktoList();
        newTaskDialog.close()
    });
}

const newTaskDialog = newTaskEventListener();



    // New Project
function newProjectEventListener() {

    // Open New Project Modal
    const newProjectModal = document.querySelector("#add_new_project_dialog");
    const newProjectBtn = document.querySelector("#add_new_todo_project_btn");

    newProjectBtn.addEventListener("click", () => {
        newProjectModal.showModal();
    });

    // Close the Modal when clicking outside it.
    const closeModals = manageModals()

    newProjectModal.addEventListener("click", e => {
        closeModals.closeNewTaskModal(e, newProjectModal);
    });

    // Create Project and add it to the List Container

    const addNewProjectBtn = document.querySelector("#new_project_create_btn")
    const createProject = createNewProject();

    addNewProjectBtn.addEventListener("click", (e) => {
        e.preventDefault();
        
        createProject.addNewProjectToList();
        newProjectModal.close();
    });
}

const newProjectDialog = newProjectEventListener();