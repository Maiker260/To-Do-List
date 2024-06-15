import { projectsList } from "../..";
import reAssignIndex from "../Features/reAssignIndex";
import createProjectDOM from "./createProjectDOM";
import clearMainSectionContent from "./clearMainSectionContent";
import changeCurrentTitle from "./changeCurrentTitle";
import filterProjects from "../Features/filterProjects";
import manageProjectBtns from "../Features/manageProjecBtns";
import handleProjectModals from "./handleProjectModals";
import clickingOutsideModals from "../Features/clickingOutsideModals";

document.addEventListener("DOMContentLoaded", function() {
    const projectListSection = document.querySelector("#left_side_navbar_second_project_list");

    projectListSection.addEventListener("click", e => {
        manageProjectBtns(e);
    });
});

// Apply the action and close the modal when the Edit/Delete Button is pressed or user clicked outside dialog
document.querySelector("#edit_project_create_btn").addEventListener("click", (e) => {
    const modal = document.querySelector("#edit_project_dialog");
    const projectModalHandler = handleProjectModals();

    checkModalInUsed();
    modal.close();
    // INPUT DOES NOT CLEAR ITSELF, FIX IT
    projectModalHandler.clearModalValues();
});
document.querySelector("#edit_project_dialog").addEventListener("click", (e) => {
    const modal = document.querySelector("#edit_project_dialog");
    clickingOutsideModals().closeModal(e, modal);
})


// Function to check what is the Current Modal Open
function checkModalInUsed() {
    const projectModalMainTitle = document.querySelector("#edit_project_dialog_main_title").dataset.name;
    if (projectModalMainTitle == "edit") {
        // editBtn(index, name)
        console.log("editCHECK");
    } else if (projectModalMainTitle == "delete") {
        console.log("deleteCHECK");
    }
}

function editBtn(index, name) {
    findProject(index)
    console.log("Index:" + index);
    console.log("name:" + name);
}



function delBtn(index, name) {
    const projectNameConfirm = document.querySelector("#edit_project_title")
    if (name === projectNameConfirm.value) {
        console.log("Index:" + index);
    } else {
        console.log("Wrong Project Name, used typed: " + projectNameConfirm);
    }
}

function findProject(pIndex) {
    return projectsList.findIndex(project => project.index === pIndex);
}

// function deleteProject(projectIndex) {
//     console.log("Index:" + projectIndex);
//     // projectsList.splice(projectIndex, 1);
//     // reAssignIndex(projectsList);
//     // // Clear existing projects
//     // clearMainSectionContent();
//     // projectsList.forEach(project => {
//     //     createProjectDOM(project.index, project.name);
//     // });
// }

