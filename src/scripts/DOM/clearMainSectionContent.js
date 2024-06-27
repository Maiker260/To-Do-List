// Function to clear all Tasks in the Main Section before showing the new Tasks.
export default function clearMainSectionContent() {
    const currentContent = document.querySelector("#main_content_section_task_list_container");
    currentContent.textContent = "";
}