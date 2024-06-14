import BtnEventsListeners from "../Features/BtnEventsListeners";
import { projectsList } from "../..";
import reAssignIndex from "../Features/reAssignIndex";
import createProjectDOM from "./createProjectDOM";
import clearMainSectionContent from "./clearMainSectionContent";
import changeCurrentTitle from "./changeCurrentTitle";
import filterProjects from "../Features/filterProjects";

export default function handleProjectActions() {
    const projectListSection = document.querySelector("#left_side_navbar_second_project_list");

    projectListSection.addEventListener("click", handleProjectClick);

    function handleProjectClick(e) {
        const target = e.target;

        // Handle edit and delete actions
        if (target && target.dataset.icon) {
            const btnType = target.dataset.icon;
            const btnIndex = target.dataset.index;
            const projectName = target.dataset.name;


            // NEED TO IDENTIFY WHY THE EVENT LISTENERS ARE BEING ADDED MULTIPLE TIMES
            if (btnType === "edit") {
                EditModalInfo(projectName);
                BtnEventsListeners(
                    "#edit_project_dialog",
                    "#" + target.id,
                    "#edit_project_create_btn",
                    () => editBtn(btnIndex, projectName)
                );
            } else if (btnType === "delete") {
                DeleteModalInfo(projectName);
                BtnEventsListeners(
                    "#edit_project_dialog",
                    "#" + target.id,
                    "#edit_project_create_btn",
                    () => delBtn(btnIndex, projectName)
                );
            }
        }

        // Handle project switching
        if (target.dataset.name !== undefined && target.dataset.title !== undefined) {
            const currentProject = target.dataset.title;
            changeCurrentTitle(currentProject);
            clearMainSectionContent();
            filterProjects(currentProject);
        }
    }
}


function editBtn(index, name) {
    // findProject(index)
}


function delBtn(index, name) {
    
    const projectNameConfirm = document.querySelector("#edit_project_title")
    if (name === projectNameConfirm.value) {
        console.log("Index:" + index);
        // deleteProject(findProject(index));
    } else {
        console.log("Wrong Project Name");
    }
}

function findProject(pIndex) {
    return projectsList.findIndex(project => project.index === pIndex);
}

function deleteProject(projectIndex) {
    // console.log("Index:" + projectIndex);
    projectsList.splice(projectIndex, 1);
    reAssignIndex(projectsList);
    // Clear existing projectss
    clearMainSectionContent();
    clearModalValues();
    projectsList.forEach(project => {
        createProjectDOM(project.index, project.name);
    });
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

function clearModalValues() {
    const inputValue = document.querySelector("#edit_project_title");
    inputValue.textContent = "";
}