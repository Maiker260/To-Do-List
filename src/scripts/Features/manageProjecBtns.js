import handleProjectModals from "../DOM/handleProjectModals";

export default function manageProjectBtns(e) {
    const projectSelected = e.target;
    const btnAction = projectSelected.dataset.icon;
    const projectIndex = projectSelected.dataset.index;
    const projectName = projectSelected.dataset.name;

    const modal = document.querySelector("#edit_project_dialog");
    const projectModalHandler = handleProjectModals();

    console.log(projectName);

    if (btnAction === "edit") {
        console.log("edit button pressed");
        projectModalHandler.editModalInfo(projectName, projectIndex);
        modal.showModal();
    } else if (btnAction === "delete") {
        console.log("delete button pressed");
        projectModalHandler.deleteModalInfo(projectName, projectIndex);
        modal.showModal(); 
    }
}