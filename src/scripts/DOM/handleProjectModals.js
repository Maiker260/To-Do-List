// Modify the Edit/Delete Project Modal DOM
export default function handleProjectModals() {
    function editModalInfo(projectName, index) {
        const projectModalMainTitle = document.querySelector("#edit_project_dialog_main_title");
        const EditProjectName = document.querySelector("#edit_project_name");
        const inputPlaceHolder = document.querySelector("#edit_project_title");
        const confirmEditButton = document.querySelector("#edit_project_create_btn");

        projectModalMainTitle.textContent = "Edit Project " + `"` + projectName + `"`;
        projectModalMainTitle.dataset.name = "edit";
        EditProjectName.textContent = "Edit the Project Name: ";
        inputPlaceHolder.placeholder = projectName;
        inputPlaceHolder.dataset.projectId = index;
        inputPlaceHolder.dataset.projectName = projectName;
        confirmEditButton.textContent = "Edit Project";
    }

    function deleteModalInfo(projectName, index) {
        const projectModalMainTitle = document.querySelector("#edit_project_dialog_main_title");
        const confirmName = document.querySelector("#edit_project_name");
        const inputPlaceHolder = document.querySelector("#edit_project_title");
        const confirmDeleteButton = document.querySelector("#edit_project_create_btn");

        projectModalMainTitle.textContent = "Do you want to delete " + `"` + projectName + `"` + "?";
        projectModalMainTitle.dataset.name = "delete";
        confirmName.textContent = "Confirm the Project Name: ";
        inputPlaceHolder.dataset.projectId = index;
        inputPlaceHolder.dataset.projectName = projectName;
        confirmDeleteButton.textContent = "Delete Project";
    }

    function clearModalValues() {
        const inputValue = document.querySelector("#edit_project_title");
        inputValue.value = "";
    }

    return { editModalInfo, deleteModalInfo, clearModalValues }
}