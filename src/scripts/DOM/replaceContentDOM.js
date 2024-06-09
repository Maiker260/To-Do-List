import taskSectionSelected from "./taskSectionSelected";

export default function replaceContent() {
    const leftSideNavbarBtns = [
        "#left_side_navbar_all_tasks_btn",
        "#left_side_navbar_today_btn",
        "#left_side_navbar_this_week_btn",
        "#left_side_navbar_urgent_btn",
        "#left_side_navbar_completed_btn"
    ]

    leftSideNavbarBtns.forEach(btn => {
        const button = document.querySelector(btn);
        if (button) {
            button.addEventListener("click", (e) => {
                const currentBtn = e.target.dataset.name;
                modifyTitle(currentBtn);
                clearTasksUIContent();
                taskSectionSelected(currentBtn);
            })
        }
    })
}


function modifyTitle(name) {
    const contentTitle = document.querySelector("#main_content_section_main_title");
    contentTitle.textContent = name;
    contentTitle.dataset.title = name;
}

function clearTasksUIContent() {
    const currentContent = document.querySelector("#main_content_section_task_list_container");
    currentContent.textContent = "";
}
