import BtnEventsListeners from "../Features/BtnEventsListeners";

export default function handleProjectBtns() {

    const projectListSection = document.querySelector("#left_side_navbar_second_project_list");
    projectListSection.addEventListener("click", e => {

        const btnID = e.target.id;
        const btnType = e.target.dataset.icon;

        if (btnID !== undefined && btnType == "edit") {
            BtnEventsListeners(
                "#edit_project_dialog",
                // `"#" + ${btnID}`,
                "#editBtn_asdfsadfs_0",
                "#edit_project_create_btn",
                editBtn()
            );
            // console.log(btnID);
        } else if (btnID !== undefined && btnType == "delete") {
            console.log("DeleteBTN")
        } else {
            console.log("NOOOOO");
        }
    })

    
}

function editBtn() {

    console.log("EditBTNPressed");

    // const editProjectName = document.querySelector("#edit_project_name");

}