import BtnEventsListeners from "../Features/BtnEventsListeners";
import { projectsList } from "../..";
import reAssignIndex from "../Features/reAssignIndex";
import createProjectDOM from "./createProjectDOM";

export default function handleProjectBtns() {

    const projectListSection = document.querySelector("#left_side_navbar_second_project_list");
    projectListSection.addEventListener("click", e => {

        const btnID = e.target.id;
        const btnType = e.target.dataset.icon;
        const btnIndex = e.target.dataset.index;
        const projectName = e.target.dataset.name;

        if (btnID !== undefined && btnType == "edit") {
            BtnEventsListeners(
                "#edit_project_dialog",
                "#" + btnID,
                "#edit_project_create_btn",
                editBtn(btnIndex, projectName)
            );
        } else if (btnID !== undefined && btnType == "delete") {
            BtnEventsListeners(
                "#edit_project_dialog",
                "#" + btnID,
                "#edit_project_create_btn",
                delBtn(btnIndex, projectName)
            );
        }
    })

    
}

function editBtn(index, name) {
    // EditModalInfo(name)
    // findProject(index)
}


function delBtn(index, name) {
    DeleteModalInfo(name);
    
    const projectNameConfirm = document.querySelector("#edit_project_title")
    if (name == projectNameConfirm.value) {
        deleteProject(findProject(index));
    } else {
        console.log("Wrong Project Name");
    }
}

function findProject(pIndex) {
    return projectsList.findIndex(project => project.index === pIndex);
}

function deleteProject(project) {
    projectsList.splice(project);
    reAssignIndex(projectsList);
    for (project in projectsList) {
        createProjectDOM(project.index, project.name)
    }
}


// Modify the Edit/Delete Modal DOM
function DeleteModalInfo(project) {
    const projectModalMainTitle = document.querySelector("#edit_project_dialog_main_title");
    const confirmName = document.querySelector("#edit_project_name");
    const inputPlaceHolder = document.querySelector("#edit_project_title");
    const confirmDeleteButton = document.querySelector("#edit_project_create_btn");

    projectModalMainTitle.textContent = "Do you want to delete " + `"` + project + `"` + "?";
    confirmName.textContent = "Confirm the Project Name: ";
    inputPlaceHolder.placeholder = project;
    confirmDeleteButton.textContent = "Delete Project";
}

function EditModalInfo(project) {
    const projectModalMainTitle = document.querySelector("#edit_project_dialog_main_title");
    const EditProjectName = document.querySelector("#edit_project_name");
    const inputPlaceHolder = document.querySelector("#edit_project_title");
    const confirmEditButton = document.querySelector("#edit_project_create_btn");

    projectModalMainTitle.textContent = "Edit Project " + `"` + project + `"`;
    EditProjectName.textContent = "Edit the Project Name: ";
    inputPlaceHolder.placeholder = project;
    confirmEditButton.textContent = "Edit Project";
}