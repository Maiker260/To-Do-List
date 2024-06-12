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
        clearCurrentForm();

        // Add Project to the Project DOM List
        createProjectDOM(newProject.index, newProject.name);
    }

    // Clear Current Information
    function clearCurrentForm() {
        addNewProjectField.value = "";
    }

    return { addNewProjectToList }
}


const newProject = createNewProject();

BtnEventsListeners(
    "#add_new_project_dialog",
    "#add_new_todo_project_btn",
    "#new_project_create_btn",
    newProject.addNewProjectToList
);

export default newProject;