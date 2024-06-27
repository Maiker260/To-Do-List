import createIcons from "./createIcons";
import createElementDOM from "./createElementDOM";
import taskCompleteStatus from "../Features/TaskCompleteStatus";

// Function to create the Task into the DOM.
export default function createTaskDOM(index, taskName, dueDate, taskStatus) {

    const newElement = createElementDOM();
    const taskComplete = taskCompleteStatus();

    // Task Main Container
    const taskContainer = newElement.createElementWithClasses("article", [
        "main_content_section_individual_task",
        "flex",
        "current_option"
        ]
    )
    newElement.assignAttributes(taskContainer, {
        id: taskName + "-" + index,
        "data-index": index,
        "data-name": taskName + "-" + index,
        "data-title": taskName
        }
    );

    // New Task Left Section
    const taskDivContainerLeftSection = newElement.createElementWithClasses("div", [ 
        "main_content_section_task_description_left",
        "flex"
        ]
    );

        // Checkbox
    const taskCheckbox = newElement.createElementWithClasses("input", [
        "main_content_section_task_checkbox",
        "interactive_icons",
        "pointer"
        ]
    );
    newElement.assignAttributes(taskCheckbox, {
        type: "checkbox",
        name: `task_checkbox${index}`,
        id: `task${index}`,
        "data-icon": "checkbox",
        "data-index": index
        }
    );

        // Task Title
    const taskLabel = newElement.createElementWithClasses("label", [
        "main_content_section_task_description_text",
        "pointer"
        ]
    );
    newElement.assignAttributes(taskLabel, {
        for: `task${index}`,
        "data-name": taskName + "-" + index,
        "data-title": taskName,
        "data-type": "Task Container",
        "data-index": index
        }
    );
    
    const taskLabelText = newElement.createElementWithClasses("p", [
        "main_content_section_task_description_text_content"
    ]);
    taskLabelText.textContent = taskName;
    newElement.assignAttributes(taskLabelText, {
        "data-name": taskName + "-" + index,
        "data-title": taskName,
        "data-type": "Task Container",
        "data-index": index
        }
    );
    taskLabel.appendChild(taskLabelText);

        // Append Task Details to Task Left Container 
    taskDivContainerLeftSection.appendChild(taskCheckbox);
    taskDivContainerLeftSection.appendChild(taskLabel);


    // New Task Right Section
    const taskDivContainerRightSection = newElement.createElementWithClasses("div", [
        "main_content_section_task_description_right",
        "flex"
        ]
    );

        // Due Date
    const taskDueDate = newElement.createElementWithClasses("p", [
        "main_content_section_task_due_date"
        ]
    );
    taskDueDate.textContent = dueDate;

        // Add more styles if the Task is Completed
    if (taskComplete.checkTaskStatus(taskStatus)) {
        taskLabelText.classList.add("task_completed");
        taskDueDate.classList.add("task_completed");
        taskCheckbox.checked = true;
    }

        // Icons Container
    const taskRightIconsDivContainer = newElement.createElementWithClasses("div", [
        "main_content_section_task_description_right_icons",
        "flex"
        ]
    );
    newElement.assignAttributes(taskRightIconsDivContainer, {
        "data-name": taskName + "-" + index,
        "data-title": taskName
        }        
    );
    
        // Append Icons to Container
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
    taskRightIconsDivContainer.appendChild(editIcons.editSvg);
    taskRightIconsDivContainer.appendChild(delIcons.deleteSvg);
    taskRightIconsDivContainer.appendChild(infoIcons.infoSvg);

        // Append Task Details to Task Right Container
    taskDivContainerRightSection.appendChild(taskDueDate);
    taskDivContainerRightSection.appendChild(taskRightIconsDivContainer);

    //Append Sections to Task Main Container

    taskContainer.appendChild(taskDivContainerLeftSection);
    taskContainer.appendChild(taskDivContainerRightSection);

    // Append Task to the DOM
    const listContainer = document.querySelector("#main_content_section_task_list_container");
    listContainer.appendChild(taskContainer);
}