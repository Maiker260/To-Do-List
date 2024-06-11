import { projectsList } from "../..";

export default function showProjectsAvailable() {

    const newTaskProjectBtn = document.querySelector("#new_task_project");

    newTaskProjectBtn.addEventListener("click", createOption());
    // newTaskProjectBtn.addEventListener("click", console.log("HOLA"));
}

function createOption() {

    // Clear All Options from the List
    // clearSelectOptions();

    const newTaskProjectList = document.querySelector("#new_task_project");

    const defaultOption = document.createElement("option");
    defaultOption.value = "default"
    defaultOption.setAttribute("selected", true);
    defaultOption.setAttribute("disabled", true);
    defaultOption.textContent = "Select a Project";
    newTaskProjectList.appendChild(defaultOption)

    projectsList.forEach(project => {
        const projectName = document.createElement("option");
        projectName.value = project.name;
        projectName.textContent = project.name;
        newTaskProjectList.appendChild(projectName)
    });
}

function clearSelectOptions() {
    const newTaskProjectList = document.querySelector("#new_task_project");

    newTaskProjectList.textContent = "";
}