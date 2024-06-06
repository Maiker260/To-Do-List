import { tasksList } from "../..";
import createTaskDOM from "../DOM/createTaskDOM";

export default function filterTasks() {

    function allTasks() {
        const allNonCompletedTasks = task => task.completed === false;

        filterList(tasksList, allNonCompletedTasks).forEach(task => {
            createTaskDOM(1, task.name, task.dueDate);
        });
    }

    function urgentTasks() {
        const urgentFilter = task => task.priority === "urgent" && task.completed === false;

        filterList(tasksList, urgentFilter).forEach(task => {
            createTaskDOM(1, task.name, task.dueDate);
        });
    }

    function completedTasks() {
        const completed = task => task.completed === true;

        filterList(tasksList, completed).forEach(task => {
            createTaskDOM(1, task.name, task.dueDate);
        });
    }

    return { urgentTasks, allTasks, completedTasks }

}

function filterList(array, criteria) {
    return array.filter(criteria);
}