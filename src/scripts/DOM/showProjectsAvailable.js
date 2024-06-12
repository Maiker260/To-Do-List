import { projectsList } from "../..";
import createElementDOM from "./createElementDOM";

// Shows Projects available in the "Project" Dropdown menu in the New Task Section.
export default function showProjectsAvailable() {

    // Clear All Options from the List
    clearSelectOptions();

    const newTaskProjectList = document.querySelector("#new_task_project");
    const newElement = createElementDOM();

    const defaultOption = newElement.createElementWithClasses("option");
    defaultOption.value = "default"
    newElement.assignAttributes(defaultOption, {
        selected: true,
        disabled: true
    });
    defaultOption.textContent = "Select a Project";
    newTaskProjectList.appendChild(defaultOption)

    projectsList.forEach(project => {
        const projectName = newElement.createElementWithClasses("option");
        projectName.value = project.name;
        projectName.textContent = project.name;
        newTaskProjectList.appendChild(projectName)
    });
}

function clearSelectOptions() {
    const newTaskProjectList = document.querySelector("#new_task_project")
    newTaskProjectList.textContent = "";
}