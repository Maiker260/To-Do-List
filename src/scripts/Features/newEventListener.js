import manageModals from "./manageModals";

export default function newEventListener(modalSelector, btnSelector, createBtnSelector, createFunction) {

    const modal = document.querySelector(modalSelector);
    const openBtn = document.querySelector(btnSelector);

    // Open Modal
    openBtn.addEventListener("click", () => {
        modal.showModal();
    });

    // Close the Modal when clicking outside it.
    const closeModals = manageModals()

    modal.addEventListener("click", (e) => {
        closeModals.closeNewTaskModal(e, modal);
    });

    // Create Element and add it to the List Container

    const addNewBtn = document.querySelector(createBtnSelector);

    addNewBtn.addEventListener("click", (e) => {
        e.preventDefault();
        createFunction();
        modal.close();
    });

}