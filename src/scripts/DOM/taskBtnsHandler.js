import { manageTaskBtns, editTaskBtn } from "../Features/manageTaskBtns";
import clickingOutsideModals from "../Features/clickingOutsideModals";

export default function taskBtnsHandler() {

    const taskBtns = manageTaskBtns();
    // const modal = document.querySelector("#edit_project_dialog");

    document.addEventListener("DOMContentLoaded", function() {
        const taskListSection = document.querySelector("#main_content_section_task_list_container");

        taskListSection.addEventListener("click", e => {
            taskBtns.checkTaskButtonPressed(e);
        });
    });

    // Apply the action and close the modal when the Edit Button is pressed or user clicked outside dialog
    // document.querySelector("#edit_task_btn").addEventListener("click", () => {
    //     editTaskBtn(e);
        // modal.close();
        // projectModalHandler.clearModalValues();
    // });
    // // Allow the user to close the Modal when clicking outside it.
    // document.querySelector("#edit_project_dialog").addEventListener("click", (e) => {
    //     clickingOutsideModals().closeModal(e, modal);
    //     projectModalHandler.clearModalValues();
    // })
}