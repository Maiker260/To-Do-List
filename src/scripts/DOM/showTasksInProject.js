import clearMainSectionContent from "./clearMainSectionContent";
import changeCurrentTitle from "./changeCurrentTitle";
import filterProjects from "../Features/filterProjects";

// Function to show in the DOM the Tasks that are linked to a Project Folder.
export default function showTasksInProject(e) {
    if (e.target.dataset.type == "Project Container") {
        const currentProject = e.target.dataset.title;
        changeCurrentTitle(currentProject);
        clearMainSectionContent();
        filterProjects(currentProject);
    }
}