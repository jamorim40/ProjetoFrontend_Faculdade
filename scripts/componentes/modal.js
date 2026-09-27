export function initializeModal(modalSelector, closeSelector) {
    const modal = document.querySelector(modalSelector);
    const closeButton = document.querySelector(closeSelector);

    if (!modal || !closeButton) {
        return;
    }

    closeButton.addEventListener("click", () => {
        modal.hidden = true;
    });
}
