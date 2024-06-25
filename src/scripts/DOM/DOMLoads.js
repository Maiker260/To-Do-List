import { projectsList, tasksList } from "../.."
import createTaskDOM from "./createTaskDOM";
import createProjectDOM from "./createProjectDOM";
import { retrieveAllDataInLocalStorage } from "../Features/DataInLocalStorage";

// Show All Tasks in the Array when the Webpage loads
export default function webpageLoads() {

    document.addEventListener("DOMContentLoaded", () => {
        retrieveAllDataInLocalStorage();
        showAllTasksInArray();
    })
}
// function to show all Tasks in the Tasks Array
function showAllTasksInArray() {
    for (const i in tasksList) {
        createTaskDOM(i, tasksList[i].name, tasksList[i].dueDate, tasksList[i].completed);
    }
    for (const i in projectsList) {
        createProjectDOM(i, projectsList[i].name);
    }
}