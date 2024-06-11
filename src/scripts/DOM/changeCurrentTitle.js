export default function changeCurrentTitle(name) {
    const contentTitle = document.querySelector("#main_content_section_main_title");
    contentTitle.textContent = name;
    contentTitle.dataset.title = name;
}