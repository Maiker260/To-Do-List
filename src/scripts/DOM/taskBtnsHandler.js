import manageTaskBtns from "../Features/manageTaskBtns";
import clickingOutsideModals from "../Features/clickingOutsideModals";
import reAssignIndex from "../Features/reAssignIndex";
import { tasksList } from "../..";
import checkCurrentTaskSectionTitle from "./checkCurrentTaskSectionTitle";
import clearMainSectionContent from "./clearMainSectionContent";
import handleTaskModals from "../DOM/handleTaskModals";
import { modifyDataInLocalStorage } from "../Features/DataInLocalStorage";

// Function to apply the changes to the Task depending on the Task Button pressed.
export default function taskBtnsHandler() {

    const taskBtns = manageTaskBtns();

    const editTaskModal = document.querySelector("#edit_task_dialog");
    const deleteTaskModal = document.querySelector("#delete_task_dialog");
    const infoTaskModal = document.querySelector("#task_info_dialog");

    document.addEventListener("DOMContentLoaded", function() {
        const taskListSection = document.querySelector("#main_content_section_task_list_container");
        taskListSection.addEventListener("click", e => {
            // Open the Modal depending on which button was pressed
            taskBtns.checkTaskButtonPressed(e);
        });
    });

    // Apply the action and close the modal when the Edit Button is pressed
    document.querySelector("#edit_task_btn").addEventListener("click", (e) => {
        e.preventDefault();
        taskBtns.editTaskBtn(e);
        reAssignIndex(tasksList);
        // Recreate all Keys in the Local Storage
        modifyDataInLocalStorage().recreateAllKeys();
        // Close and clear the Modal
        editTaskModal.close();
        handleTaskModals().clearEditModalInfo();
        // Recreate Tasks
        clearMainSectionContent();
        checkCurrentTaskSectionTitle();
    });

    // Apply the action and close the modal when the Delete Button is pressed
    document.querySelector("#delete_task_btn").addEventListener("click", (e) => {
        e.preventDefault();
        taskBtns.deleteTaskBtn(e);
        reAssignIndex(tasksList);
        // Recreate all Keys in the Local Storage
        modifyDataInLocalStorage().recreateAllKeys();
        // Close and clear the Modal
        deleteTaskModal.close();
        handleTaskModals().clearDeleteModalInfo();
        // Recreate Tasks
        clearMainSectionContent();
        checkCurrentTaskSectionTitle();
    });

    // Apply the action and close the modal when the Info Button is pressed
    document.querySelector("#info_task_btn").addEventListener("click", (e) => {
        infoTaskModal.close();
    });


    // Allow the user to close the Modal when clicking outside it.
    editTaskModal.addEventListener("click", (e) => {
        clickingOutsideModals().closeModal(e, editTaskModal);
    })
    deleteTaskModal.addEventListener("click", (e) => {
        clickingOutsideModals().closeModal(e, deleteTaskModal);
    })
    infoTaskModal.addEventListener("click", (e) => {
        clickingOutsideModals().closeModal(e, infoTaskModal);
    })
}