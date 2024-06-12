import taskSectionSelected from "./taskSectionSelected";
import filterProjects from "../Features/filterProjects";

// Check where the User is located in the Tasks Section to display the Tasks Available
export default function checkCurrentTaskSectionTitle() {

    const contentTitle = document.querySelector("#main_content_section_main_title");
    taskSectionSelected(contentTitle.dataset.title);
    filterProjects(contentTitle.dataset.title);
}