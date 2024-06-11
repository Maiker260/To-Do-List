import { projectsList, tasksList } from "../..";

export default function filterProjects(project) {
    switch (project) {
        case project:
            filterAndCreateProject(task => task.project == project);          
        break
    }


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