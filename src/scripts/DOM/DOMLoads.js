import { tasksList } from "../.."
import createTaskDOM from "./createTaskDOM";

// Show All Tasks in the Array when the Webpage loads
export default function webpageLoads() {

    document.addEventListener("DOMContentLoaded", () => {
        showAllTasksInArray();
    })
}

// function to show all Tasks in the Tasks Array
function showAllTasksInArray() {
    // clearTasksUIContent();
    for (const i in tasksList) {
        createTaskDOM(i, tasksList[i].name, tasksList[i].dueDate);
    }
}

// BORRAR CUANDO TODO ESTE LISTO
function clearTasksUIContent() {
    const currentContent = document.querySelector("#main_content_section_task_list_container");
    currentContent.textContent = "";
}