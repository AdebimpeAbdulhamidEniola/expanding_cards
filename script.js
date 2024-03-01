const panels = document.querySelectorAll(".panel");
for (let i = 0;i < panels.length; i++) {
    panels[i].addEventListener("click", () => {panels[i].classList.toggle("active")});
}