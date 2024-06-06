import listsContainer from "./listsContainer";
import newEventListener from "./newEventListener";
import createProjectDOM from "../DOM/createProjectDOM";

function createNewProject() {

    const projectListContainer = listsContainer().projectsList;
    const addNewProjectField = document.querySelector("#add_new_project_title")

    class Project {
        constructor (name) {
            this.name = name;
        }
    }
    
    // Create New Project
    function addNewProjectToList() {

        const newProject = new Project(
            `${addNewProjectField.value}`
        )

        // Add New Project to the List
        projectListContainer.push(newProject);

        // Clear Current Information
        clearCurrentForm();

        // Add Project to the Project DOM List
        createProjectDOM(1, newProject.name);


        // BORRRRAAR
        console.log(projectListContainer);
    }

    // Clear Current Information
    function clearCurrentForm() {
        addNewProjectField.value = "";
    }

    return { addNewProjectToList }
}


const newProject = createNewProject();

newEventListener(
    "#add_new_project_dialog",
    "#add_new_todo_project_btn",
    "#new_project_create_btn",
    newProject.addNewProjectToList
);

export default newProject;