
// Function to Show or Close the Sidebar for Mobile View.
export default function manageMobileViewSidebar() {

    const sidebarCheckbox = document.querySelector("#show_navbar_checkbox");

    sidebarCheckbox.addEventListener("click", () => {
        checkCheckboxStatus(sidebarCheckbox);
    });
}

function checkCheckboxStatus(checkbox) {
    const navBarSection = document.querySelector("#left_side_navbar_section");

    if (checkbox.checked) {
        navBarSection.classList.remove("sidebar_clicked_closed")
        navBarSection.classList.add("sidebar_clicked_open")
    } else {
        navBarSection.classList.remove("sidebar_clicked_open")
        navBarSection.classList.add("sidebar_clicked_closed")
    }
}