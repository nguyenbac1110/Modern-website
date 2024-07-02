document.addEventListener("DOMContentLoaded", () => {
    const menuButtons = document.querySelectorAll("#menu-btn");
    const navDialog = document.getElementById("nav-dialog");

    menuButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            navDialog.classList.toggle("hidden");
        });
    });
});



