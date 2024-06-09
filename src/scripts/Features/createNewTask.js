import newEventListener from "./newEventListener";
// import createTaskDOM from "../DOM/createTaskDOM";
import { tasksList } from "../..";
import reAssignTaskIndex from "./reAssignTaskIndex";
import checkCurrentTaskSectionTitle from "../DOM/checkCurrentTaskSectionTitle";

function createNewTask() {    

    class Task {
        constructor(name, description, project, dueDate, priority) {
            this.name = name;
            this.description = description;
            this.project = project;
            this.dueDate = dueDate;
            this.priority = priority
            this.completed = false;
            this.index = "";
        }
    }

    const taskFormElements = {
        name: document.querySelector("#new_task_name"),
        description: document.querySelector("#new_task_description"),
        project: document.querySelector("#new_task_project"),
        dueDate: document.querySelector("#new_task_due_date"),
        priority: document.querySelector("#new_task_priority")
    };

    // Create New Task
    function addNewTaskToList() {

        const newTask = new Task(
            taskFormElements.name.value,
            taskFormElements.description.value,
            taskFormElements.project.value,
            taskFormElements.dueDate.value,
            taskFormElements.priority.value,
        );

        // Add New Task to the List
        tasksList.push(newTask);

        // Assign a new Index value, in case that a Task was deleted before.
        reAssignTaskIndex();

        // Add Task to the DOM
        checkCurrentTaskSectionTitle();

        // Clear Current Information
        clearCurrentForm();

        // BORRRRAAR
        console.log(tasksList);
    }

    // Clear Current Information from Form
    function clearCurrentForm() {
        taskFormElements.name.value = "";
        taskFormElements.description.value = "";
        taskFormElements.project.value = "default";
        taskFormElements.dueDate.value = "";
        taskFormElements.priority.value = "default";
    }

    return {
        addNewTaskToList
    };
}

const newTask = createNewTask();

newEventListener(
    "#add_new_todo_task_dialog", 
    "#add_new_todo_task_btn", 
    "#new_task_create_btn",
    newTask.addNewTaskToList
);

export default newTask;
