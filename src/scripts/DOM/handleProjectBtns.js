import { projectsList } from "../..";
import reAssignIndex from "../Features/reAssignIndex";
import createProjectDOM from "./createProjectDOM";
import clearProjectSection from "./clearProjectSection";
import manageProjectBtns from "../Features/manageProjecBtns";
import handleProjectModals from "./handleProjectModals";
import clickingOutsideModals from "../Features/clickingOutsideModals";
import replaceProjectTasks from "./replaceProjectTasks";

console.log("Testing");
document.addEventListener("DOMContentLoaded", function() {
    const projectListSection = document.querySelector("#left_side_navbar_second_project_list");

    projectListSection.addEventListener("click", e => {
    console.log("Error Yo");
        manageProjectBtns(e);
    });
});

// Apply the action and close the modal when the Edit/Delete Button is pressed or user clicked outside dialog
document.querySelector("#edit_project_create_btn").addEventListener("click", () => {
    const modal = document.querySelector("#edit_project_dialog");
    const projectModalHandler = handleProjectModals();

    checkModalInUsed();
    modal.close();
    projectModalHandler.clearModalValues();
});
// Allow the user to close the Modal when clicking outside it.
document.querySelector("#edit_project_dialog").addEventListener("click", (e) => {
    const modal = document.querySelector("#edit_project_dialog");
    const projectModalHandler = handleProjectModals();

    clickingOutsideModals().closeModal(e, modal);
    projectModalHandler.clearModalValues();
})


// Function to check what is the Current Modal Open
function checkModalInUsed() {
    const projectModalMainTitle = document.querySelector("#edit_project_dialog_main_title").dataset.name;
    const projectIndex = document.querySelector("#edit_project_title").dataset.projectId;
    const projectName = document.querySelector("#edit_project_title").dataset.projectName;
    if (projectModalMainTitle == "edit") {
        editBtn(projectIndex)
        console.log("editCHECK");
    } else if (projectModalMainTitle == "delete") {
        console.log("deleteCHECK");
        delBtn(projectIndex, projectName);
    }
}

function editBtn(index) {
    findProject(index)
    console.log("Index:" + index);
    // console.log("name:" + name);
}

function delBtn(index, name) {
    const projectNameConfirm = document.querySelector("#edit_project_title").value
    if (name === projectNameConfirm) {
        console.log("DelIndex:" + index);
        deleteProject(findProject(index));
    } else {
        console.log("Wrong Project Name, used typed: " + projectNameConfirm);
    }
}

function findProject(pIndex) {
    return projectsList.findIndex(project => project.index === pIndex);
}

function deleteProject(projectIndex) {
    console.log("Index:" + projectIndex);
    projectsList.splice(projectIndex, 1);
    reAssignIndex(projectsList);
    // Clear existing projects
    clearProjectSection();
    projectsList.forEach(project => {
        createProjectDOM(project.index, project.name);
    });
}

