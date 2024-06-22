
export default function handleTaskModals() {

    function editTaskModalInfo(taskName, taskindex) {
        const editTaskModalMainTitle = document.querySelector("#edit_task_dialog_main_title");
        const editTaskModalBtn = document.querySelector("#edit_task_btn");

        editTaskModalMainTitle.textContent = "Edit Task " + `"` + taskName + `"`;
        editTaskModalBtn.dataset.index = taskindex;
    }
    
    function deleteTaskModalInfo(taskName, taskindex) {
        const deleteTaskModalMainTitle = document.querySelector("#delete_task_dialog_main_title");
        const confirmName = document.querySelector("#delete_task_name");
        const confirmDeleteButton = document.querySelector("#delete_task_btn");

        deleteTaskModalMainTitle.textContent = "Do you want to delete " + `"` + taskName + `"` + "?";
        confirmName.textContent = "Confirm the delete: ";
        confirmDeleteButton.textContent = "Delete Task";
        confirmDeleteButton.dataset.index = taskindex;
    }

    function infoTaskModalInfo(task) {
        const infoTaskModal = document.querySelector("#info_task_dialog_main_title");

        const infoTaskValues = {
            name: document.querySelector("#task_info_dialog_task_name"),
            description: document.querySelector("#task_info_dialog_task_description"),
            project: document.querySelector("#task_info_dialog_task_project"),
            dueDate: document.querySelector("#task_info_dialog_task_due_date"),
            priority: document.querySelector("#task_info_dialog_task_priority"),
            status: document.querySelector("#task_info_dialog_task_status")
        };

        infoTaskModal.textContent = task.name;
        
        infoTaskValues.name.textContent = task.name;
        infoTaskValues.description.textContent = task.description;
        infoTaskValues.project.textContent = task.project;
        infoTaskValues.dueDate.textContent = changeDateFormat(task.dueDate);
        infoTaskValues.priority.textContent = task.priority;
        infoTaskValues.status.textContent = checkTaskStatus(task.completed);
    }

    function clearEditModalInfo() {
        
        const editTaskModalValues = {
            name: document.querySelector("#edit_task_name"),
            description: document.querySelector("#edit_task_description"),
            project: document.querySelector("#edit_task_project"),
            dueDate: document.querySelector("#edit_task_due_date"),
            priority: document.querySelector("#edit_task_priority"),
        }

        editTaskModalValues.name.value = "";
        editTaskModalValues.description.value = "";
        editTaskModalValues.project.value = "";
        editTaskModalValues.dueDate.value = "";
        editTaskModalValues.priority.value= "default";
    }

    function clearDeleteModalInfo() {
        const confirmDeleteInput = document.querySelector("#delete_task_input");
        confirmDeleteInput.value = "";
    }

    return { deleteTaskModalInfo, editTaskModalInfo, clearEditModalInfo, clearDeleteModalInfo, infoTaskModalInfo }
}

function checkTaskStatus(status) {
    if (status) {
        return "Completed"
    } else {
        return "Pending"
    }
}

// Change the Date format to show a more detailed Date
function changeDateFormat(date) {
    return new Date(date).toDateString();
}