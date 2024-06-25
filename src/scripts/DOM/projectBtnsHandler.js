import manageProjectBtns from "../Features/manageProjecBtns";
import handleProjectModals from "./handleProjectModals";
import clickingOutsideModals from "../Features/clickingOutsideModals";
import showTasksInProject from "./showTasksinProject";
import { modifyDataInLocalStorage } from "../Features/DataInLocalStorage";

export default function projectBtnsHandler() {

    const projectBtns = manageProjectBtns();
    const modal = document.querySelector("#edit_project_dialog");
    const projectModalHandler = handleProjectModals();
    const newProjectInput = document.querySelector("#edit_project_title");

    document.addEventListener("DOMContentLoaded", function() {
        const projectListSection = document.querySelector("#left_side_navbar_second_project_list");

        projectListSection.addEventListener("click", e => {
            projectBtns.checkButtonPressed(e);
            showTasksInProject(e);
        });
    });

    // Apply the action and close the modal when the Edit/Delete Button is pressed or user clicked outside dialog
    document.querySelector("#edit_project_create_btn").addEventListener("click", () => {
        if (newProjectInput.value.trim() !== "" ) {
            projectBtns.checkProjectModalInUsed();
            modal.close();
            projectModalHandler.clearModalValues();
            // Recreate all Keys in the Local Storage
            modifyDataInLocalStorage().recreateAllKeys();
        } else {
            alert("Please enter a valid Value");
        }
    });
    // Allow the user to close the Modal when clicking outside it.
    document.querySelector("#edit_project_dialog").addEventListener("click", (e) => {
        clickingOutsideModals().closeModal(e, modal);
    })
}