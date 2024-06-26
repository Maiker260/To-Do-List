import clickingOutsideModals from "./clickingOutsideModals";
import showProjectsAvailable from "../DOM/showProjectsAvailable";

// Function to add the Event Listeners to the DOM easier.
export default function BtnEventsListeners(modalSelector, btnSelector, createEditBtnSelector, createEditFunction) {

    const modal = document.querySelector(modalSelector);
    const openBtn = document.querySelector(btnSelector);

    // Open Modal.
    openBtn.addEventListener("click", () => {
        modal.showModal();
        // Show Available Projects in New Task Modal.
        showProjectsAvailable("#new_task_project");
    });

    // Close the Modal when clicking outside it.
    const clickModals = clickingOutsideModals()

    modal.addEventListener("click", (e) => {
        clickModals.closeModal(e, modal);
    });

    // Create/Edit Element and add it to the List Container.
    document.querySelector(createEditBtnSelector).addEventListener("click", e => {
        e.preventDefault();
        createEditFunction();
        modal.close();
    });
    
}