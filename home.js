const header = document.getElementById("hero");
const navButtons = document.querySelectorAll(".nav-button");
const divArea = document.getElementById('area')

const navDrops = document.querySelectorAll(".nav-drop")
let isHovering = false
let currentNav = ""
let currentButton = ""

navButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        header.style.backgroundColor = "white";
        header.style.color = "black";
        divArea.style.display = "block";

        button.style.backgroundColor = "antiquewhite" 

        //Asign value to check the current nav hovered
        currentNav = button.id
        currentButton = button.id

        navDrops.forEach(div=> {   
            if(currentNav === div.id) {
                div.style.display = "flex";

                // button.style.backgroundColor = "antiquewhite" 
            } else {
                div.style.display = "none";
                // button.style.backgroundColor = "transparent" 
            }
        })
    })

})2

//To listen for mouse out on the drop down nav
divArea.addEventListener('mouseleave', () => {
    header.style.backgroundColor = "transparent";
    header.style.color = "white";
    divArea.style.display = "none";
    
    navDrops.forEach(div => {
        div.style.display = "none";
    })
})
































































