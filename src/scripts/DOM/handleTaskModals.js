
export default function handleTaskModals() {

    function deleteTaskModalInfo(taskName, taskindex) {
        const deleteTaskModalMainTitle = document.querySelector("#delete_task_dialog_main_title");
        const confirmName = document.querySelector("#delete_task_name");
        const inputPlaceHolder = document.querySelector("#delete_task_title");
        const confirmDeleteButton = document.querySelector("#delete_task_btn");

        deleteTaskModalMainTitle.textContent = "Do you want to delete " + `"` + taskName + `"` + "?";
        confirmName.textContent = "Confirm the delete: ";
        inputPlaceHolder.dataset.taskId = taskindex;
        inputPlaceHolder.dataset.taskName = taskName;
        confirmDeleteButton.textContent = "Delete Task";
    }

    return { deleteTaskModalInfo }

}