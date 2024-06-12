import manageModals from "./manageModals";
import showProjectsAvailable from "../DOM/showProjectsAvailable";

export default function BtnEventsListeners(modalSelector, btnSelector, createEditBtnSelector, createEditFunction) {

    const modal = document.querySelector(modalSelector);
    const openBtn = document.querySelector(btnSelector);

    // Open Modal
    openBtn.addEventListener("click", () => {
        modal.showModal();
        showProjectsAvailable();
    });

    // Close the Modal when clicking outside it.
    const closeModals = manageModals()

    modal.addEventListener("click", (e) => {
        closeModals.closeNewTaskModal(e, modal);
    });

    // Create/Edit Element and add it to the List Container

    const addNewEditBtn = document.querySelector(createEditBtnSelector);

    addNewEditBtn.addEventListener("click", (e) => {
        e.preventDefault();
        createEditFunction();
        modal.close();
    });
}