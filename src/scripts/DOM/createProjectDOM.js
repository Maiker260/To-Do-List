import createIcons from "./createIcons";
import createElementDOM from "./createElementDOM";

export default function createProjectDOM(index, name) {

    const projectList = document.querySelector("#left_side_navbar_second_project_list");

    const newElement = createElementDOM();

    // Project Main Container
    const projectContainer = newElement.createElementWithClasses("li", [
        "left_side_navbar_list_all_titles",
        "left_side_navbar_list_titles",
        "icon_text_center",
        "left_side_navbar_second_list_titles",
        "left_side_navbar_second_list_project",
        "current_option",
        "flex"
        ]
    );
    newElement.assignAttributes(projectContainer, {
        id: name + "-" + index,
        "data-index": index,
        "data-name": name + "-" + index,
        "data-title": name
        }
    );

        // Project Title
    const projectTitle = newElement.createElementWithClasses("p", [
        "left_side_navbar_task_title",
        "pointer"
        ]
    );
    projectTitle.textContent = name;
    newElement.assignAttributes(projectTitle, {
        "data-name": name + "-" + index,
        "data-title": name
        }        
    );

        // Icons Container
    const iconsContainer = newElement.createElementWithClasses("div", [
        "left_side_navbar_second_list_icons_container",
        "flex"
        ]
    );
    newElement.assignAttributes(iconsContainer, {
        "data-name": name + "-" + index,
        "data-title": name
        }        
    );

            // Append Icons to Container
    const editBtnID = "editBtn" + "_" + name + "_" + index;
    const editDataIcon = "edit";
    const deleteBtnID = "deleteBtn" + "_" + name + "_" + index;
    const delDataIcon = "delete";

    const editIcons = createIcons(editBtnID, editDataIcon, index, name);
    const delIcons = createIcons(deleteBtnID, delDataIcon, index, name);

    newElement.assignAttributes(editIcons.editSvg, {
        id: editBtnID,
        "data-icon": editDataIcon,
        "data-index": index,
        "data-name": name
    });
    newElement.assignAttributes(delIcons.deleteSvg, {
        id: deleteBtnID,
        "data-icon": delDataIcon,
        "data-index": index,
        "data-name": name
    });
    iconsContainer.appendChild(editIcons.editSvg);
    iconsContainer.appendChild(delIcons.deleteSvg);

            // Append Project Content to Project Container
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(iconsContainer);

            // Append Project to Project List
    projectList.appendChild(projectContainer);
}