import handleProjectModals from "../DOM/handleProjectModals";
import { projectsList, tasksList } from "../..";
import reAssignIndex from "./reAssignIndex";
import createProjectDOM from "../DOM/createProjectDOM";
import clearProjectSection from "../DOM/clearProjectSection";
import changeCurrentTitle from "../DOM/changeCurrentTitle";
import checkCurrentTaskSectionTitle from "../DOM/checkCurrentTaskSectionTitle";
import clearMainSectionContent from "../DOM/clearMainSectionContent";

export default function manageProjectBtns() {

    function checkButtonPressed(e) {

        const projectSelected = e.target;
        const btnAction = projectSelected.dataset.icon;
        const projectIndex = projectSelected.dataset.index;
        const projectName = projectSelected.dataset.name;
        
        const modal = document.querySelector("#edit_project_dialog");
        const projectModalHandler = handleProjectModals();
        
        if (btnAction === "edit") {
            projectModalHandler.editModalInfo(projectName, projectIndex);
            modal.showModal();
        } else if (btnAction === "delete") {
            projectModalHandler.deleteModalInfo(projectName, projectIndex);
            modal.showModal(); 
        }
    }

    // Function to check what is the Current Project Modal Open
    function checkProjectModalInUsed() {
        const projectModalMainTitle = document.querySelector("#edit_project_dialog_main_title").dataset.name;
        const projectIndex = document.querySelector("#edit_project_title").dataset.projectId;
        const projectName = document.querySelector("#edit_project_title").dataset.projectName;
        if (projectModalMainTitle == "edit") {
            editBtn(projectIndex, projectName)
        } else if (projectModalMainTitle == "delete") {
            delBtn(projectIndex, projectName);
        }
    }
    return { checkButtonPressed, checkProjectModalInUsed }
}


function editBtn(index, oldProjectName) {
    const newProjectName = document.querySelector("#edit_project_title").value;
    editProject(findProject(index), newProjectName);
    modifyTaskProject(findTask(oldProjectName), newProjectName);
}

function editProject(projectIndex, newProjectName) {
    projectsList[projectIndex].name = newProjectName;
    resetProjectList();
    returnToMainPage();
}

function modifyTaskProject(filter, newProjectName) {
    filter.forEach(task => task.project = newProjectName)
}

function delBtn(index, name) {
    const projectNameConfirm = document.querySelector("#edit_project_title").value
    if (name === projectNameConfirm) {
        deleteProject(findProject(index));
        unassignTaskProject(findTask(name));
    } else {
        alert("Wrong Project Name, Project: " + projectNameConfirm + " does not match. Try again.");
    }
}

function deleteProject(projectIndex) {
    projectsList.splice(projectIndex, 1);
    // Reset Projects
    resetProjectList();
    returnToMainPage();
}

function unassignTaskProject(filter)  {
    return filter.forEach(task => task.project = "No Project Folder Assigned")
}

function findProject(pIndex) {
    return projectsList.findIndex(project => project.index === pIndex);
}

function findTask(pName) {
    return tasksList.filter((task => task.project == pName))    
}

function resetProjectList() {
    reAssignIndex(projectsList);
    // Clear existing projects
    clearProjectSection();
    projectsList.forEach(project => {
        createProjectDOM(project.index, project.name);
    });
}

function returnToMainPage() {
    changeCurrentTitle("All Tasks");
    clearMainSectionContent();
    checkCurrentTaskSectionTitle();
}