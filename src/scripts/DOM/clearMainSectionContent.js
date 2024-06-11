export default function clearMainSectionContent() {
    const currentContent = document.querySelector("#main_content_section_task_list_container");
    currentContent.textContent = "";
}