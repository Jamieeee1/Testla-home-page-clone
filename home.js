const header = document.getElementById("hero");
const navButtons = document.querySelectorAll(".nav-button");

navButtons.forEach(button => {
    button.addEventListener('mouseover', () =>header.classList.remove("whitebc"))

    button.addEventListener('mouseout', () =>header.classList.remove("whitebc"))
})

// function changeBackground() {
//     header.classList.add("whitebc")
// }

// function removeBackground() {
//     header.classList.remove("whitebc")
// }