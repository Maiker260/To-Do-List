import handleTaskModals from "../DOM/handleTaskModals";
import showProjectsAvailable from "../DOM/showProjectsAvailable";
import { tasksList } from "../..";

export default function manageTaskBtns() {

    const taskModals = handleTaskModals();

    function checkTaskButtonPressed(e) {

        const taskSelected = e.target;
        const btnAction = taskSelected.dataset.icon;
        const taskName = taskSelected.dataset.name;
        const taskIndex = taskSelected.dataset.index;
        
        const editModal = document.querySelector("#edit_task_dialog");
        const deleteModal = document.querySelector("#delete_task_dialog");
        const infoTaskModal = document.querySelector("#task_info_dialog");
        
        if (btnAction === "edit") {
            taskModals.editTaskModalInfo(taskName, taskIndex);
            editModal.showModal();
            // Show Available Projects in Edit Task Modal
            showProjectsAvailable("#edit_task_project");
        } else if (btnAction === "delete") {
            taskModals.deleteTaskModalInfo(taskName, taskIndex);
            deleteModal.showModal();
        } else if (btnAction === "info") {
            const task = taskInfoBtn(taskIndex);
            taskModals.infoTaskModalInfo(task);
            infoTaskModal.showModal();
        }
    }

    function editTaskBtn(e) {

        const taskSelected = e.target;
        const taskIndex = taskSelected.dataset.index;
    
        const taskInArray =  tasksList[findTask(taskIndex)];
    
        const newTaskValues = {
            name: document.querySelector("#edit_task_name"),
            description: document.querySelector("#edit_task_description"),
            project: document.querySelector("#edit_task_project"),
            dueDate: document.querySelector("#edit_task_due_date"),
            priority: document.querySelector("#edit_task_priority")
        };
    
        taskInArray.name = newTaskValues.name.value;
        taskInArray.description = newTaskValues.description.value;
        taskInArray.project = newTaskValues.project.value;
        taskInArray.dueDate = newTaskValues.dueDate.value;
        taskInArray.priority = newTaskValues.priority.value;
    }

    function deleteTaskBtn(e) {
        const taskSelected = e.target;
        const taskIndex = taskSelected.dataset.index;

        const confirmDeleteInput = document.querySelector("#delete_task_input");

        if (confirmDeleteInput.value == "DELETE") {
            tasksList.splice(findTask(taskIndex), 1);
        } else {
            alert("Type DELETE to confirm.");
        }
    }

    function taskInfoBtn(taskIndex) {
        return tasksList.find(task => task.index === taskIndex);
    }

    return { checkTaskButtonPressed, editTaskBtn, deleteTaskBtn }
}

function findTask(tIndex) {
    return tasksList.findIndex(task => task.index === tIndex);
}

