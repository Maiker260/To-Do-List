import filterTasks from "../Features/filterTasks";

// Check where the User is currently located in the Website.
export default function taskSectionSelected(section) {

    switch (section) {
        case "All Tasks":
            filterTasks().allTasks();
            break
        case "Today":
            filterTasks().todayTask();
            break
        case "This Week":
            filterTasks().thisWeekTask();
            break
        case "Urgent":
            filterTasks().urgentTasks();
            break
        case "Completed":
            filterTasks().completedTasks();
            break
    }

}