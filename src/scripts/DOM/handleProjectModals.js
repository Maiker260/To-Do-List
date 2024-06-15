// Modify the Edit/Delete Modal DOM

export default function handleProjectModals() {
    function editModalInfo(project) {
        const projectModalMainTitle = document.querySelector("#edit_project_dialog_main_title");
        const EditProjectName = document.querySelector("#edit_project_name");
        const inputPlaceHolder = document.querySelector("#edit_project_title");
        const confirmEditButton = document.querySelector("#edit_project_create_btn");

        projectModalMainTitle.textContent = "Edit Project " + `"` + project + `"`;
        projectModalMainTitle.dataset.name = "edit";
        EditProjectName.textContent = "Edit the Project Name: ";
        inputPlaceHolder.placeholder = project;
        confirmEditButton.textContent = "Edit Project";
    }

    function deleteModalInfo(project) {
        const projectModalMainTitle = document.querySelector("#edit_project_dialog_main_title");
        const confirmName = document.querySelector("#edit_project_name");
        const inputPlaceHolder = document.querySelector("#edit_project_title");
        const confirmDeleteButton = document.querySelector("#edit_project_create_btn");

        projectModalMainTitle.textContent = "Do you want to delete " + `"` + project + `"` + "?";
        projectModalMainTitle.dataset.name = "delete";
        confirmName.textContent = "Confirm the Project Name: ";
        inputPlaceHolder.placeholder = project;
        confirmDeleteButton.textContent = "Delete Project";
    }

    function clearModalValues() {
        const inputValue = document.querySelector("#edit_project_title");
        inputValue.textContent = "";
        console.log("input clear");
    }

    return { editModalInfo, deleteModalInfo, clearModalValues }
}
