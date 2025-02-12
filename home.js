const header = document.getElementById("hero");
const navButtons = document.querySelectorAll(".nav-button");
const divArea = document.getElementById('area')

const navDrops = document.querySelectorAll(".nav-drop")
let isHovering = false
let currentNav = ""

navButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        header.style.backgroundColor = "white";
        header.style.color = "black";
        divArea.style.display = "block";

        //Asign value to check the current nav hovered
        currentNav = button.id

        navDrops.forEach(div=> {   
            if(currentNav === div.id ) {
                div.style.display = "flex";
            } else {
                div.style.display = "none";
            }
        })
    })

})

//To listen for mouse out on the drop down nav
divArea.addEventListener('mouseleave', () => {
    header.style.backgroundColor = "transparent";
    header.style.color = "white";
    divArea.style.display = "none";
    
    navDrops.forEach(div => {
        div.style.display = "none";
    })
})
































































