const viewMoreButtons = document.querySelectorAll(".view-more");

viewMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const details = button.previousElementSibling;

        details.classList.toggle("expanded");

        if (details.classList.contains("expanded")) {
            button.textContent = "View Less ↑";
        } else {
            button.textContent = "View More ↓";
        }
    });
});