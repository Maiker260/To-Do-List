// Assign a new Index Value, in case that a Task/Project was deleted before.
export default function reAssignIndex(list) {
    for (const i in list) {
        list[i].index = i;
    }
}