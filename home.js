const header = document.getElementById("hero");
const navButtons = document.querySelectorAll(".nav-button");

const navDrops = document.querySelectorAll(".nav-drop")
let isHovering = false

navButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        header.toggleAttribute("hovered")

        navDrops.forEach(div=> {
            div.style.display = "flex";
            
            // div.addEventListener('mouseenter', () => {
            //     isHovering = true;
            // });

            // div.addEventListener('mouseleave', () => {
            //     isHovering = false;
            // });

        })
    })

    button.addEventListener('mouseout', () =>{
        // header.toggleAttribute("hovered")  

        navDrops.forEach(div=> {

            div.addEventListener('mouseenter', () => {
                isHovering = true;
            });

            div.addEventListener('mouseleave', () => {
                isHovering = false;
            });

            if(!isHovering) {
                div.style.display = "flex";
            } else {
                div.style.display = "none";
            }
        })
    })
})










