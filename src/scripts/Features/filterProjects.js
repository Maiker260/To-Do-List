import { tasksList } from "../..";
import reAssignIndex from "./reAssignIndex";
import createTaskDOM from "../DOM/createTaskDOM";

// Function to filter the Projects depending on the Criteria.
export default function filterProjects(project) {
    filterAndCreateProject(task => task.project == project);
}

function filterAndCreateProject(filter) {
    reAssignIndex(tasksList);
    filterList(tasksList, filter).forEach(task => {
        createTaskDOM(task.index, task.name, task.dueDate, task.completed);
    });
}

function filterList(array, criteria) {
    return array.filter(criteria);
}