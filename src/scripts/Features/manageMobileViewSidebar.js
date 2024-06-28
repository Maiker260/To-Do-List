
// Function to Show or Close the Sidebar for Mobile View.
export default function manageMobileViewSidebar() {

    const sidebarCheckbox = document.querySelector("#show_navbar_checkbox");

    sidebarCheckbox.addEventListener("click", () => {
        checkCheckboxStatus(sidebarCheckbox);
    });

    // Allow the user to close the Modal when clicking outside it.
    // const navBarSection = document.querySelector("#left_side_navbar_section");

    // navBarSection.addEventListener("click", (e) => {
    //     closeSidebar(e, navBarSection, sidebarCheckbox);
    // })
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



// function closeSidebar(e, sidebar, checkbox) {
//     const dialogDimensions = sidebar.getBoundingClientRect()
//     if (
//         e.clientX < dialogDimensions.left ||
//         e.clientX > dialogDimensions.right ||
//         e.clientY < dialogDimensions.top ||
//         e.clientY > dialogDimensions.bottom
//     ) {
//         checkbox.checked = false;
//         console.log("HOLA");
//     } else {
//         console.log(dialogDimensions);
//     }
// }