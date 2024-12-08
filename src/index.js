import "./styles.css"
import {menu} from "./menu.js"
import {home} from "./home.js"
import {about} from "./about.js"
console.log("Hello World")
let action=()=>{
    let content=document.querySelector("#content")
    let btns=document.querySelectorAll("button")
    home()
    btns.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            console.log("hello")
            content.classList.add("hidden");
            setTimeout(()=>{
                content.replaceChildren()
                if(btn.textContent=="Home"){
                    home()
                }
                if(btn.textContent=="Menu"){
                    menu()
                }
                if(btn.textContent=="About"){
                    about()
                }
                content.classList.remove("hidden");
            },500)
        })
    })
}
action()