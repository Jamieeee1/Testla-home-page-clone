const header = document.getElementById("hero");
const navButtons = document.querySelectorAll(".nav-button");

const navDrops = document.getElementById("vehicle")

navButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        header.toggleAttribute("hovered")
        navDrops.toggleAttribute("hovered")
    })

    button.addEventListener('mouseout', () =>{
        header.toggleAttribute("hovered")  
        navDrops.toggleAttribute("hovered")  
    })
})










