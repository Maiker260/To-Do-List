import { tasksList } from "../..";
import reAssignIndex from "./reAssignIndex";
import createTaskDOM from "../DOM/createTaskDOM";

export default function filterProjects(project) {
    filterAndCreateProject(task => task.project == project);
}

function filterAndCreateProject(filter) {
    reAssignIndex(tasksList);
    filterList(tasksList, filter).forEach(task => {
        createTaskDOM(task.index, task.name, task.dueDate);
    });
}

function filterList(array, criteria) {
    return array.filter(criteria);
}