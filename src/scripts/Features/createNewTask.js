import BtnEventsListeners from "./BtnEventsListeners";
import { tasksList } from "../..";
import reAssignIndex from "./reAssignIndex";
import checkCurrentTaskSectionTitle from "../DOM/checkCurrentTaskSectionTitle";
import clearMainSectionContent from "../DOM/clearMainSectionContent";

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

    function rejectBlankValues() {
        for (let key in taskFormElements) {
            if (taskFormElements[key].value.trim() === "" || 
                taskFormElements[key].value.trim() === "default") {
                alert(`The ${key} field cannot be blank.`);
                return false;
            }
        }
        return true;
    }

    // Create New Task
    function addNewTaskToList() {

        // Validate before adding a new task
        if (!rejectBlankValues()) {
            return;
        }

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
        reAssignIndex(tasksList);

        // Clear DOM Current Content
        clearMainSectionContent();

        // Add Task to the DOM
        checkCurrentTaskSectionTitle();

        // Clear Current Information
        clearCurrentForm();
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

BtnEventsListeners(
    "#add_new_todo_task_dialog", 
    "#add_new_todo_task_btn", 
    "#new_task_create_btn",
    newTask.addNewTaskToList
);

export default newTask;
