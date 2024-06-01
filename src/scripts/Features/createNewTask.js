import listsContainer from "./listsContainer";
import newEventListener from "./newEventListener";
// import manageModals from "./manageModals";

function createNewTask() {

    const taskListContainer = listsContainer().tasksList;

    class Task {
        constructor(name, description, project, dueDate, priority) {
            this.name = name;
            this.description = description;
            this.project = project;
            this.dueDate = dueDate;
            this.priority = priority
            this.completed = "no";
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
            taskFormElements.priority.value
        );

        // Add New Task to the List
        taskListContainer.push(newTask);

        // Clear Current Information
        clearCurrentForm();

        // BORRRRAAR
        console.log(taskListContainer);
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
