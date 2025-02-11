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

        currentNav = button.id

        console.log(currentNav)

        navDrops.forEach(div=> {
            
            if(currentNav === div.id ) {
                div.style.display = "flex";
            } else {
                div.style.display = "none";
            }
        })
    })

})


// navDrops.forEach(div => {
//     div.addEventListener('mouseleave', () => {
//         header.style.backgroundColor = "transparent";
//         header.style.color = "white";
//         div.style.display = "none";
//         divArea.style.display = "none";
//     })
// })

divArea.addEventListener('mouseleave', () => {
    header.style.backgroundColor = "transparent";
    header.style.color = "white";
    divArea.style.display = "none";
    
    navDrops.forEach(div => {
        div.style.display = "none";
    })
})
































































