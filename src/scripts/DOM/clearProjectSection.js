// Function to remove all the projects in the DOM
export default function clearProjectSection() {    
    const projectListSection = document.querySelector("#left_side_navbar_second_project_list");
    projectListSection.textContent = "";
}