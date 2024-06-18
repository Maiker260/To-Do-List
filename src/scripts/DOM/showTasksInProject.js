import clearMainSectionContent from "./clearMainSectionContent";
import changeCurrentTitle from "./changeCurrentTitle";
import filterProjects from "../Features/filterProjects";

export default function showTasksInProject(e) {
    if (e.target.dataset.type == "Project Container") {
        const currentProject = e.target.dataset.title;
        changeCurrentTitle(currentProject);
        clearMainSectionContent();
        filterProjects(currentProject);
    }
}