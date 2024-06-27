import { tasksList } from "../..";
import createTaskDOM from "../DOM/createTaskDOM";
import { isToday, isThisWeek } from "date-fns";
import reAssignIndex from "./reAssignIndex";

export default function filterTasks() {
    // Should show all tasks, non-completed first and then the completed ones.
    function allTasks() {
        filterAndCreateTasks(task => !task.completed)
    }

    function todayTask() {
        filterAndCreateTasks(task => isTodayTaskFilter(task.dueDate) && !task.completed);
    }

    function thisWeekTask() {
        filterAndCreateTasks(task => isThisWeekTaskFilter(task.dueDate) && !task.completed);
    }

    function urgentTasks() {
        filterAndCreateTasks(task => task.priority === "Urgent" && !task.completed);
    }

    function completedTasks() {
        filterAndCreateTasks(task => task.completed);
    }

    return { allTasks, todayTask, thisWeekTask, urgentTasks, completedTasks }
}


function filterAndCreateTasks(filter) {
    reAssignIndex(tasksList);
    filterList(tasksList, filter).forEach(task => {
        createTaskDOM(task.index, task.name, task.dueDate, task.completed);
    });
}

function filterList(array, criteria) {
    return array.filter(criteria);
}

function convertDate(date) {
    // Date will show 1 day before the one requested if "Hyphens" are used, if a "/" is used it works.
    return new Date(date.replace(/-/g, '\/'));
}

function isTodayTaskFilter(date) {
    return isToday(convertDate(date))
}

function isThisWeekTaskFilter(date) {
    // Week starts on Monday
    return isThisWeek(convertDate(date), { weekStartsOn: 1 })
}