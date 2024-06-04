export default function createTaskDOM(index, taskName, dueDate) {

    const createTaskContainer = document.createElement("article");
    createTaskContainer.classList.add("main_content_section_individual_task");
    createTaskContainer.classList.add("flex");
    createTaskContainer.classList.add("current_option");

    // New Task Left Section
    const createTaskDivContainerLeftSection = document.createElement("div");
    createTaskDivContainerLeftSection.classList.add("main_content_section_task_description_left");
    createTaskDivContainerLeftSection.classList.add("flex");

    const createTaskCheckbox = document.createElement("input");
    createTaskCheckbox.setAttribute("type","checkbox");
    createTaskCheckbox.setAttribute("name",`task_checkbox${index}`);
    createTaskCheckbox.setAttribute("id",`task${index}`);
    createTaskCheckbox.classList.add("main_content_section_task_checkbox");
    createTaskCheckbox.classList.add("interactive_icons");
    createTaskCheckbox.classList.add("pointer");

    const createTaskLabel = document.createElement("label");
    createTaskLabel.setAttribute("for",`task${index}`);
    createTaskLabel.classList.add("main_content_section_task_description_text");
    createTaskLabel.classList.add("pointer");
    
    const createTaskLabelText = document.createElement("p");
    createTaskLabelText.textContent = taskName;
    createTaskLabel.appendChild(createTaskLabelText);

        // Append Task Details to Task Left Container 
    createTaskDivContainerLeftSection.appendChild(createTaskCheckbox);
    createTaskDivContainerLeftSection.appendChild(createTaskLabel);


    // New Task Right Section
    const createTaskDivContainerRightSection = document.createElement("div");
    createTaskDivContainerRightSection.classList.add("main_content_section_task_description_right");
    createTaskDivContainerRightSection.classList.add("flex");

    const createTaskDueDate = document.createElement("p");
    createTaskDueDate.classList.add("main_content_section_task_due_date");
    createTaskDueDate.textContent = dueDate;

    const createTaskRightIconsDivContainer = document.createElement("div");
    createTaskRightIconsDivContainer.classList.add("main_content_section_task_description_right_icons");
    createTaskRightIconsDivContainer.classList.add("flex");

        // EDIT SVG ICON
    const editSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    editSvg.setAttribute("class", "interactive_icons main_content_section_task_icon pointer");
    editSvg.setAttribute("aria-hidden", "true");
    editSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    editSvg.setAttribute("width", "24");
    editSvg.setAttribute("height", "24");
    editSvg.setAttribute("fill", "none");
    editSvg.setAttribute("viewBox", "0 0 24 24");

    const editSvgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    editSvgPath.setAttribute("stroke", "currentColor");
    editSvgPath.setAttribute("stroke-linecap", "round");
    editSvgPath.setAttribute("stroke-linejoin", "round");
    editSvgPath.setAttribute("stroke-width", "2");
    editSvgPath.setAttribute("d", "m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z");

    editSvg.appendChild(editSvgPath);

        // DELETE SVG ICON
    const deleteSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    deleteSvg.setAttribute("class", "interactive_icons main_content_section_task_icon pointer");
    deleteSvg.setAttribute("aria-hidden", "true");
    deleteSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    deleteSvg.setAttribute("width", "24");
    deleteSvg.setAttribute("height", "24");
    deleteSvg.setAttribute("fill", "none");
    deleteSvg.setAttribute("viewBox", "0 0 24 24");

    const deleteSvgpath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    deleteSvgpath.setAttribute("stroke", "currentColor");
    deleteSvgpath.setAttribute("stroke-linecap", "round");
    deleteSvgpath.setAttribute("stroke-linejoin", "round");
    deleteSvgpath.setAttribute("stroke-width", "2");
    deleteSvgpath.setAttribute("d", "M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z");

    deleteSvg.appendChild(deleteSvgpath);

        // INFO SVG ICON
    const infoSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    infoSvg.setAttribute("class", "main_content_section_task_icon interactive_icons pointer");
    infoSvg.setAttribute("aria-hidden", "true");
    infoSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    infoSvg.setAttribute("width", "24");
    infoSvg.setAttribute("height", "24");
    infoSvg.setAttribute("fill", "none");
    infoSvg.setAttribute("viewBox", "0 0 24 24");

    const infoSvgpath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    infoSvgpath.setAttribute("stroke", "currentColor");
    infoSvgpath.setAttribute("stroke-linecap", "round");
    infoSvgpath.setAttribute("stroke-linejoin", "round");
    infoSvgpath.setAttribute("stroke-width", "2");
    infoSvgpath.setAttribute("d", "M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z");

    infoSvg.appendChild(infoSvgpath);

        // Append Icons to Container
    createTaskRightIconsDivContainer.appendChild(editSvg);
    createTaskRightIconsDivContainer.appendChild(deleteSvg);
    createTaskRightIconsDivContainer.appendChild(infoSvg);

        // Append Task Details to Task Right Container
    createTaskDivContainerRightSection.appendChild(createTaskDueDate);
    createTaskDivContainerRightSection.appendChild(createTaskRightIconsDivContainer);

    //Append Sections to Task Main Container

    createTaskContainer.appendChild(createTaskDivContainerLeftSection);
    createTaskContainer.appendChild(createTaskDivContainerRightSection);

    // return { createTaskContainer } ;

    // BOOOORRRAR
    const listContainer = document.querySelector("#main_content_section_task_list_container");
    listContainer.appendChild(createTaskContainer);
}