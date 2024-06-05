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
        for: `task${index}`
        }
    );
    
    const TaskLabelText = newElement.createElementWithClasses("p");
    TaskLabelText.textContent = taskName;
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
    
        // Append Icons to Container
    const icons = createIcons();
    TaskRightIconsDivContainer.appendChild(icons.editSvg);
    TaskRightIconsDivContainer.appendChild(icons.deleteSvg);
    TaskRightIconsDivContainer.appendChild(icons.infoSvg);

        // Append Task Details to Task Right Container
    TaskDivContainerRightSection.appendChild(TaskDueDate);
    TaskDivContainerRightSection.appendChild(TaskRightIconsDivContainer);

    //Append Sections to Task Main Container

    TaskContainer.appendChild(TaskDivContainerLeftSection);
    TaskContainer.appendChild(TaskDivContainerRightSection);

    // return { TaskContainer } ;

    // BOOOORRRAR
    const listContainer = document.querySelector("#main_content_section_task_list_container");
    listContainer.appendChild(TaskContainer);
}