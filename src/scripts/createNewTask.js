import listsContainer from "./listsContainer";

export default function createNewTask() {

    const taskListContainer = listsContainer().tasksList;
    
    class Task {
        constructor(name, description, project, dueDate, priority) {
            this.name = name;
            this.description = description;
            this.project = project;
            this.dueDate = dueDate;
            this.priority = priority
        }
    }

    const newTaskName = document.querySelector("#new_task_name");
    const newTaskDescription = document.querySelector("#new_task_description");
    const newTaskProject = document.querySelector("#new_task_project");
    const newTaskDueDate = document.querySelector("#new_task_due_date");
    const newTaskPriority = document.querySelector("#new_task_priority");

    // Create New Task
    function addNewTasktoList() {

        const newTask = new Task(
            `${newTaskName.value}`,
            `${newTaskDescription.value}`,
            `${newTaskProject.value}`,
            `${newTaskDueDate.value}`,
            `${newTaskPriority.value}`
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
        newTaskName.value = "";
        newTaskDescription.value = "";
        newTaskProject.value = "default";
        newTaskDueDate.value = "";
        newTaskPriority.value = "default";
    }

    return {
        addNewTasktoList,
    };

}
