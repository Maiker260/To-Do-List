   
// Function to allow the user to close the Modal when clicking outside it.
export default function clickingOutsideModals() {
    function closeModal(e, dialog) {
        const dialogDimensions = dialog.getBoundingClientRect()
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            dialog.close()
        }
    }

    return { closeModal }
}