// Assign a new Index value, in case that a Task/Project was deleted before.
export default function reAssignIndex(list) {
    for (const i in list) {
        list[i].index = i;
    }
}