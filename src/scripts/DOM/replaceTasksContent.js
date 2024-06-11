import taskSectionSelected from "./taskSectionSelected";
import clearMainSectionContent from "./clearMainSectionContent";
import changeCurrentTitle from "./changeCurrentTitle";

export default function replaceTasksContent() {
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
                changeCurrentTitle(currentBtn);
                clearMainSectionContent();
                taskSectionSelected(currentBtn);
            })
        }
    })
}