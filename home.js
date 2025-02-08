const header = document.getElementById("hero");
const navButtons = document.querySelectorAll(".nav-button");

const navDrops = document.querySelectorAll(".nav-drop")
let isHovering = false

navButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        header.style.backgroundColor = "white";
        header.style.color = "black";

        navDrops.forEach(div=> {
            div.style.display = "flex";
        })
    })

    button.addEventListener('mouseout', () =>{        

        navDrops.forEach(div=> {

            div.addEventListener('mouseenter', () => {
                isHovering = true;
            });

        })
    })
})

navDrops.forEach(div => {
    div.addEventListener('mouseleave', () => {
        header.style.backgroundColor = "transparent";
        header.style.color = "white";
        div.style.display = "none";
    })
})


































































