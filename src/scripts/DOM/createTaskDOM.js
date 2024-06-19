import createIcons from "./createIcons";
import createElementDOM from "./createElementDOM";

export default function createTaskDOM(index, taskName, dueDate) {

    const newElement = createElementDOM();

    // Task Main Container
    const TaskContainer = newElement.createElementWithClasses("article", [
        "main_content_section_individual_task",
        "flex",
        "current_option"
        ]
    )
    newElement.assignAttributes(TaskContainer, {
        id: taskName + "-" + index,
        "data-index": index,
        "data-name": taskName + "-" + index,
        "data-title": taskName
        }
    );

    // New Task Left Section
    const TaskDivContainerLeftSection = newElement.createElementWithClasses("div", [ 
        "main_content_section_task_description_left",
        "flex"
        ]
    );

        // Checkbox
    const TaskCheckbox = newElement.createElementWithClasses("input", [
        "main_content_section_task_checkbox",
        "interactive_icons",
        "pointer"
        ]
    );
    newElement.assignAttributes(TaskCheckbox, {
        type: "checkbox",
        name: `task_checkbox${index}`,
        id: `task${index}`
        }
    );

        // Task Title
    const TaskLabel = newElement.createElementWithClasses("label", [
        "main_content_section_task_description_text",
        "pointer"
        ]
    );
    newElement.assignAttributes(TaskLabel, {
        for: `task${index}`,
        "data-name": taskName + "-" + index,
        "data-title": taskName,
        "data-type": "Task Container"
        }
    );
    
    const TaskLabelText = newElement.createElementWithClasses("p", [
        "main_content_section_task_description_text_content"
    ]);
    TaskLabelText.textContent = taskName;
    newElement.assignAttributes(TaskLabelText, {
        "data-name": taskName + "-" + index,
        "data-title": taskName,
        "data-type": "Task Container"
        }
    );
    TaskLabel.appendChild(TaskLabelText);

        // Append Task Details to Task Left Container 
    TaskDivContainerLeftSection.appendChild(TaskCheckbox);
    TaskDivContainerLeftSection.appendChild(TaskLabel);


    // New Task Right Section
    const TaskDivContainerRightSection = newElement.createElementWithClasses("div", [
        "main_content_section_task_description_right",
        "flex"
        ]
    );

        // Due Date
    const TaskDueDate = newElement.createElementWithClasses("p", [
        "main_content_section_task_due_date"
        ]
    );
    TaskDueDate.textContent = dueDate;

        // Icons Container
    const TaskRightIconsDivContainer = newElement.createElementWithClasses("div", [
        "main_content_section_task_description_right_icons",
        "flex"
        ]
    );
    newElement.assignAttributes(TaskRightIconsDivContainer, {
        "data-name": taskName + "-" + index,
        "data-title": taskName
        }        
    );
    
        // Append Icons to Container
    const icons = createIcons();

    const editTaskBtnID = "editTaskBtn" + "_" + taskName + "_" + index;
    const editTaskDataIcon = "edit";
    const deleteTaskBtnID = "deleteTaskBtn" + "_" + taskName + "_" + index;
    const delTaskDataIcon = "delete";
    const infoTaskBtnID = "infoTaskBtn" + "_" + taskName + "_" + index;
    const infoTaskDataIcon = "info";

    const editIcons = createIcons(editTaskBtnID, editTaskDataIcon, index, taskName);
    const delIcons = createIcons(deleteTaskBtnID, delTaskDataIcon, index, taskName);
    const infoIcons = createIcons(infoTaskBtnID, infoTaskDataIcon, index, taskName);

    newElement.assignAttributes(editIcons.editSvg, {
        id: editTaskBtnID,
        "data-icon": editTaskDataIcon,
        "data-index": index,
        "data-name": taskName
    });
    newElement.assignAttributes(delIcons.deleteSvg, {
        id: deleteTaskBtnID,
        "data-icon": delTaskDataIcon,
        "data-index": index,
        "data-name": taskName
    });
    newElement.assignAttributes(infoIcons.infoSvg, {
        id: infoTaskBtnID,
        "data-icon": infoTaskDataIcon,
        "data-index": index,
        "data-name": taskName
    });
    TaskRightIconsDivContainer.appendChild(editIcons.editSvg);
    TaskRightIconsDivContainer.appendChild(delIcons.deleteSvg);
    TaskRightIconsDivContainer.appendChild(infoIcons.infoSvg);

        // Append Task Details to Task Right Container
    TaskDivContainerRightSection.appendChild(TaskDueDate);
    TaskDivContainerRightSection.appendChild(TaskRightIconsDivContainer);

    //Append Sections to Task Main Container

    TaskContainer.appendChild(TaskDivContainerLeftSection);
    TaskContainer.appendChild(TaskDivContainerRightSection);

    // Append Task to the DOM
    const listContainer = document.querySelector("#main_content_section_task_list_container");
    listContainer.appendChild(TaskContainer);
}