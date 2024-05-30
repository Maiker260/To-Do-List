export default function createToDo() {

    const toDoList = [];

    class Task {

        constructor(name, description, project, dueDate, priority) {
            this.name = name;
            this.description = description;
            this.project = project;
            this.dueDate = dueDate;
            this.priority = priority
        }
    }

    function addNewTasktoList() {

        const newTaskName = document.querySelector("#new_task_name");
        const newTaskDescription = document.querySelector("#new_task_description");
        const newTaskProject = document.querySelector("#new_task_project");
        const newTaskDueDate = document.querySelector("#new_task_due_date");
        const newTaskPriority = document.querySelector("#new_task_priority");

        const newTask = new Task (
            `${newTaskName.value}`
            `${newTaskDescription.value}`
            `${newTaskProject.value}`
            `${newTaskDueDate.value}`
            `${newTaskPriority.value}`
        );

        // Add New Task to the List
        toDoList.push(newTask);
    }

    return {
        toDoList,
        addNewTasktoList,
        closeNewTaskModal
    };

}
