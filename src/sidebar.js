import { render_important } from "./important";
import { render_today } from "./today";
import { render_planned } from "./planned";
import { render_completed } from "./completed";
import { directory_render } from "./directory_render";
import { new_project } from "./new_project";
import { clear_render } from "./clear_render";
let sidebarrender=()=>{
    const body=document.querySelector("body");

    const sidebar=document.createElement("div");
    const main=document.createElement("div")
    main.id="main";

    sidebar.classList.add("sidebar");
    const side_main_head=document.createElement("div");
    side_main_head.classList.add("side_main_head");
    side_main_head.textContent="Sublime";

    const sub_head_Tasks=document.createElement("div");
    sub_head_Tasks.textContent="Tasks";

    const button_Today=document.createElement("button");
    button_Today.textContent="Today";
    button_Today.addEventListener("click",()=>{
        render_today();
    })

    const button_Important=document.createElement("button");
    button_Important.textContent="Important";
    button_Important.addEventListener("click",()=>{
        render_important();
    })

    const button_Planned=document.createElement("button");
    button_Planned.textContent="Planned";
    button_Planned.addEventListener("click",()=>{
        render_planned();
    })

    const button_Completed=document.createElement("button");
    button_Completed.textContent="Completed";
    button_Completed.addEventListener("click",()=>{
        render_completed();
    })

    const sub_head_Projects=document.createElement("div");
    sub_head_Projects.textContent="Projects";

    const button_New_Project=document.createElement("button");
    button_New_Project.textContent="New Project";
    button_New_Project.addEventListener("click",()=>{
        let container=document.createElement("div")
        let input=document.createElement("input")
        let add=document.createElement("button")
        add.textContent="Add"
        let cancel=document.createElement("button")
        cancel.textContent="Cancel"
        button_New_Project.after(container)
        container.appendChild(input)
        container.appendChild(add)
        container.appendChild(cancel)
        add.addEventListener("click",()=>{
            new_project(input.value)
            container.closest("div").remove();
        })
        cancel.addEventListener("click",()=>{
            container.closest("div").remove();
        })

    })

    
    const projects_head=document.createElement("div")
    projects_head.id="projects_head"
    const default_Folder=document.createElement("div");
    default_Folder.textContent="Default";
    default_Folder.id="default"
    default_Folder.classList.add("folderoptions")
    let projects=JSON.parse(localStorage.getItem("projects"))
    if(!(projects)){
        localStorage.setItem("projects",JSON.stringify(["Default"]))
    }
    



    body.appendChild(side_main_head);
    body.appendChild(main);
    side_main_head.appendChild(sub_head_Tasks);
    side_main_head.appendChild(button_Today);
    side_main_head.appendChild(button_Important);
    side_main_head.appendChild(button_Planned);
    side_main_head.appendChild(button_Completed);
    side_main_head.appendChild(sub_head_Projects);
    side_main_head.appendChild(button_New_Project);
    side_main_head.appendChild(projects_head);
    projects_head.appendChild(default_Folder)
    
    directory_render()

}
export {sidebarrender}