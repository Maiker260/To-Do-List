import { projectsList, tasksList } from "../.."
import createTaskDOM from "./createTaskDOM";
import createProjectDOM from "./createProjectDOM";
import { retrieveAllDataInLocalStorage } from "../Features/DataInLocalStorage";

// Show All Available Tasks in the Project/Tasks Array when the Webpage loads.
export default function webpageLoads() {

    document.addEventListener("DOMContentLoaded", () => {
        retrieveAllDataInLocalStorage();
        showAllTasksInArray();
    })
}
// Function to show all Available Tasks in the DOM.
function showAllTasksInArray() {
    for (const i in tasksList) {
        createTaskDOM(i, tasksList[i].name, tasksList[i].dueDate, tasksList[i].completed);
    }
    for (const i in projectsList) {
        createProjectDOM(i, projectsList[i].name);
    }
}