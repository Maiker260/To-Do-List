import { tasksList, projectsList } from "../..";

// Function to storage the items in the Local Storage with the Web Storage API.
export function storeDataInLocalStorage() {

    function storeTask(task) {
        let transformTaskObjectToString = JSON.stringify(task)
        localStorage.setItem(`Task ${task.index}`, transformTaskObjectToString);
    }

    function storeProject(project) {
        let transformProjectObjectToString = JSON.stringify(project);
        localStorage.setItem(`Project ${project.index}`, transformProjectObjectToString);
    }

    return { storeTask, storeProject }
};

// Function to modify/recreate the items in the Local Storage with the Web Storage API.
export function modifyDataInLocalStorage() {

    function recreateAllKeys() {
        localStorage.clear();
        tasksList.forEach(task => storeDataInLocalStorage().storeTask(task));
        projectsList.forEach(project => storeDataInLocalStorage().storeProject(project));
    }

    return { recreateAllKeys }
}

// Function to retrieve the items in the Local Storage with the Web Storage API.
export function retrieveAllDataInLocalStorage() {

    if (localStorage.length) {
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).startsWith("Task")) {
                const transformStringToTaskObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
                tasksList.push(transformStringToTaskObject);
            } else if (localStorage.key(i).startsWith("Project")) {
                const transformStringToProjectObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
                projectsList.push(transformStringToProjectObject);
            }
        }   
    }
        
}