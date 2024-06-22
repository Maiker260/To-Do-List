import BtnEventsListeners from "./BtnEventsListeners";
import createProjectDOM from "../DOM/createProjectDOM";
import { projectsList } from "../..";
import clearMainSectionContent from "../DOM/clearMainSectionContent";
import reAssignIndex from "./reAssignIndex";
import checkCurrentTaskSectionTitle from "../DOM/checkCurrentTaskSectionTitle";

function createNewProject() {

    const addNewProjectField = document.querySelector("#add_new_project_title")

    class Project {
        constructor (name) {
            this.name = name;
            this.index = "";
        }
    }
    
    // Create New Project
    function addNewProjectToList() {

        // Validate before adding a new task
        if (!rejectBlankValue(addNewProjectField)) {
            return;
        }

        const newProject = new Project(
            `${addNewProjectField.value}`
        )

        // Add New Project to the List
        projectsList.push(newProject);

        // Assign a new Index value, in case that a Project was deleted before.
        reAssignIndex(projectsList);

        // Clear DOM Current Content
        clearMainSectionContent();

        // Add Task to the DOM
        checkCurrentTaskSectionTitle();

        // Clear Current Information
        clearCurrentForm(addNewProjectField);

        // Add Project to the Project DOM List
        createProjectDOM(newProject.index, newProject.name);
    }

    return { addNewProjectToList }
}

function rejectBlankValue(field) {
    if (field.value.trim() == "") {
        alert("The Project Name field cannot be blank.");
        clearCurrentForm(field);
        return false
    } else if (!rejectDuplicateProjectNames(field.value)) {
        alert("The Project Name already exists, try again.");
        clearCurrentForm(field);
        return false
    }
    return true
}

function rejectDuplicateProjectNames(name) {
    for (let key in projectsList) {
        if (projectsList[key].name === name) {
            return false
        }
    }
    return true
}

// Clear Current Information
function clearCurrentForm(field) {
    field.value = "";
}

const newProject = createNewProject();

BtnEventsListeners(
    "#add_new_project_dialog",
    "#add_new_todo_project_btn",
    "#new_project_create_btn",
    newProject.addNewProjectToList
);

export default newProject;