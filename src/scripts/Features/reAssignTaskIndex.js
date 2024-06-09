import { tasksList } from "../..";

// Assign a new Index value, in case that a Task was deleted before.
export default function reAssignTaskIndex() {
    for (const i in tasksList) {
        tasksList[i].index = i;
    }
}