import listsContainer from "./listsContainer";

export default function filterTasks() {

    const taskList = listsContainer().tasksList;

    // function urgentTasks() {

        const urgentFilter = task => task.priority === "urgent";

        const urgentList = filterList(taskList, urgentFilter);

        console.log(taskList);
        console.log(urgentList);
    // }

    // return { urgentTasks }
    return console.log(taskList);

}

function filterList(array, criteria) {
    return array.filter(criteria);
}