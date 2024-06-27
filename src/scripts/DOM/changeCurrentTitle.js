// Function to replace the Main Section title when a Navigation button was clicked.
export default function changeCurrentTitle(name) {
    const contentTitle = document.querySelector("#main_content_section_main_title");
    contentTitle.textContent = name;
    contentTitle.dataset.title = name;
}