import { tasksList } from "../..";
import createTaskDOM from "../DOM/createTaskDOM";
const { isToday } = require("date-fns");

export default function filterTasks() {

    function allTasks() {
        const allNonCompletedTasks = task => task.completed === false;

        filterList(tasksList, allNonCompletedTasks).forEach(task => {
            createTaskDOM(1, task.name, task.dueDate);
        });
    }

    function todayTask() {
        const todayFilter = task => convertDate(task.dueDate) === true && task.completed === false;

        filterList(tasksList, todayFilter).forEach(task => {
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

    return { urgentTasks, todayTask, allTasks, completedTasks }

}

function filterList(array, criteria) {
    return array.filter(criteria);
}

function convertDate(date) {
    // Date will show 1 day before the one requested if "Hyphens" are used, if a "/" is used it works.
    const validDate = new Date(date.replace(/-/g, '\/'));

    if (isToday(validDate)) {
        return true;
    }
}