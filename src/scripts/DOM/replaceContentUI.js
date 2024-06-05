import createTaskDOM from "./createTaskDOM";

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
                showTasksContent(currentBtn);
            })
        }
    })
}


function modifyTitle(name) {
    const contentTitle = document.querySelector("#main_content_section_main_title");
    contentTitle.textContent = name;
}

function clearTasksUIContent() {
    const currentContent = document.querySelector("#main_content_section_task_list_container");
    currentContent.textContent = "";
}

function showTasksContent(btn) {
    switch (btn) {
        case "All Tasks":
            console.log("Showing All Tasks");
            createTaskDOM(20, "TestNOName", "Jan-11th-1111");
            break
        case "Today":
            console.log("Showing Today Tasks");
            break
        case "This Week":
            console.log("Showing This Week Tasks");
            break
        case "Urgent":
            console.log("Showing Urgent Tasks");
            createTaskDOM(1, "TestName", "Jun-26th-2024");
            break
        case "Completed":
            console.log("Showing Completed Tasks");
            break
    }
}

