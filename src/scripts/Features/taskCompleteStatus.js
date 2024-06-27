// Function to check the current Task Status.
export default function taskCompleteStatus() {

    function checkTaskStatus(task) {
        if (task) {
            return true;
        } else {
            return false;
        }
    }

    function changeTaskStatus(task) {
        if (checkTaskStatus(task.completed)) {
            task.completed = false;
        } else if (!checkTaskStatus(task.completed)) {
            task.completed = true;
        }
    }

    return { checkTaskStatus, changeTaskStatus }
}