import handleTaskModals from "../DOM/handleTaskModals";


export default function manageTaskBtns() {

    const taskModals = handleTaskModals();

    function checkTaskButtonPressed(e) {

        const taskSelected = e.target;
        const btnAction = taskSelected.dataset.icon;
        const taskName = taskSelected.dataset.name;
        const taskIndex = taskSelected.dataset.index;
        
        const editModal = document.querySelector("#edit_task_dialog");
        const deleteModal = document.querySelector("#delete_task_dialog");
        
        if (btnAction === "edit") {
            editModal.showModal();
        } else if (btnAction === "delete") {
            taskModals.deleteTaskModalInfo(taskName, taskIndex);
            deleteModal.showModal();
        } else if (btnAction === "info") {
            console.log("Showing Info Modal");
        }
    }

    return { checkTaskButtonPressed }
}