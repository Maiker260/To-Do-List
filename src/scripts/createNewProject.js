import listsContainer from "./listsContainer";

export default function createNewProject() {

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

        // BORRRRAAR
        console.log(projectListContainer);
    }

    // Clear Current Information from Form
    function clearCurrentForm() {
        addNewProjectField.value = "";
    }


    return { addNewProjectToList }
}