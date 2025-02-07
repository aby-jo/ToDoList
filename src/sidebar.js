import sublimelogo from "./img/sublime_logo.svg"
import todaylogo from "./img/today_logo.svg"
import importantlogo from "./img/important_logo.svg"
import plannedlogo from "./img/planned_logo.svg"
import completedlogo from "./img/completed_logo.svg"
import newprojectlogo from "./img/newproject_logo.svg"
import folderlogo from "./img/folder_logo.svg"
import { render_important } from "./important";
import { render_today } from "./today";
import { render_planned } from "./planned";
import { render_completed } from "./completed";
import { directory_render } from "./directory_render";
import { new_project } from "./new_project";
let sidebarrender=()=>{
    const body=document.querySelector("body");

    const sidebar=document.createElement("div");
    const main=document.createElement("div")
    main.id="main";

    sidebar.classList.add("sidebar");
    const side_main_head=document.createElement("div");
    side_main_head.classList.add("side_main_head");

    const sublime=document.createElement("div")
    sublime.classList.add("sublime")
    const sublime_txt=document.createElement("div")
    sublime_txt.textContent="Sublime";
    sublime_txt.classList.add("sublime_txt")
    const sublime_img=document.createElement("img")
    sublime_img.id="sublime_logo"
    sublime_img.src=sublimelogo
    sublime.appendChild(sublime_img)
    sublime.appendChild(sublime_txt)


    const sub_head_Tasks=document.createElement("div");
    sub_head_Tasks.textContent="Tasks";
    sub_head_Tasks.classList.add("task_head")

    const button_Today=document.createElement("div");
    const button_Today_txt=document.createElement("div")
    button_Today_txt.textContent="Today";
    const button_Today_img=document.createElement("img")
    button_Today_img.classList.add("tasklogo")
    button_Today_img.src=todaylogo
    button_Today.appendChild(button_Today_img)
    button_Today.appendChild(button_Today_txt)
    button_Today.classList.add("css_tasks")
    button_Today.addEventListener("click",()=>{
        render_today();
    })

    const button_Important=document.createElement("div");
    const button_Important_txt=document.createElement("div")
    button_Important_txt.textContent="Important";
    const button_Important_img=document.createElement("img")
    button_Important_img.classList.add("tasklogo")
    button_Important_img.src=importantlogo
    button_Important.appendChild(button_Important_img)
    button_Important.appendChild(button_Important_txt)
    button_Important.classList.add("css_tasks")
    button_Important.addEventListener("click",()=>{
        render_important();
    })

    const button_Planned=document.createElement("div");
    const button_Planned_txt=document.createElement("div")
    button_Planned_txt.textContent="Planned";
    const button_Planned_img=document.createElement("img")
    button_Planned_img.classList.add("tasklogo")
    button_Planned_img.src=plannedlogo
    button_Planned.appendChild(button_Planned_img)
    button_Planned.appendChild(button_Planned_txt)
    button_Planned.classList.add("css_tasks")
    button_Planned.addEventListener("click",()=>{
        render_planned();
    })

    const button_Completed=document.createElement("div");
    const button_Completed_txt=document.createElement("div")
    button_Completed_txt.textContent="Completed";
    const button_Completed_img=document.createElement("img")
    button_Completed_img.classList.add("tasklogo")
    button_Completed_img.src=completedlogo
    button_Completed.appendChild(button_Completed_img)
    button_Completed.appendChild(button_Completed_txt)
    button_Completed.classList.add("css_tasks")
    button_Completed.addEventListener("click",()=>{
        render_completed();
    })

    const sub_head_Projects=document.createElement("div");
    sub_head_Projects.textContent="Projects";
    sub_head_Projects.classList.add("task_head","projects_render")

    const button_New_Project=document.createElement("div");
    button_New_Project.id="buttonnewproject"
    const button_New_Project_txt=document.createElement("div")
    button_New_Project_txt.textContent="New Project";
    const button_New_Project_img=document.createElement("img")
    button_New_Project_img.classList.add("tasklogo")
    button_New_Project_img.src=newprojectlogo
    button_New_Project.appendChild(button_New_Project_img)
    button_New_Project.appendChild(button_New_Project_txt)
    button_New_Project.classList.add("css_tasks")
    button_New_Project.addEventListener("click",()=>{
        let container=document.createElement("div")
        container.id="directory_input_container"
        let folder_logo=document.createElement("img")
        folder_logo.src=folderlogo
        folder_logo.classList.add("tasklogo")
        let input=document.createElement("input")
        input.id="directory_input"
        let add=document.createElement("button")
        add.id="add_direc"
        add.textContent="Add"
        let cancel=document.createElement("button")
        cancel.id="cancel_direc"
        cancel.textContent="Cancel"
        button_New_Project.after(container)
        container.appendChild(folder_logo)
        container.appendChild(input)
        container.appendChild(cancel)
        container.appendChild(add)
        add.addEventListener("click",()=>{
            new_project(input.value)
            container.closest("div").remove();
        })
        cancel.addEventListener("click",()=>{
            container.closest("div").remove();
        })

    })

    
    const projects_head=document.createElement("div")
    projects_head.classList.add("projects_head")
    projects_head.id="projects_head"
    const default_Folder=document.createElement("div");
    const default_Folder_txt=document.createElement("div")
    default_Folder_txt.textContent="Root";
    const default_Folder_img=document.createElement("img")
    default_Folder_img.classList.add("tasklogo")
    default_Folder_img.src=folderlogo
    default_Folder.appendChild(default_Folder_img)
    default_Folder.appendChild(default_Folder_txt)
    default_Folder.id="Root"
    default_Folder.classList.add("folderoptions")
    let projects=JSON.parse(localStorage.getItem("projects"))
    if(!(projects)){
        localStorage.setItem("projects",JSON.stringify(["Root"]))
    }
    



    body.appendChild(side_main_head);
    body.appendChild(main);
    side_main_head.appendChild(sublime)
    side_main_head.appendChild(sub_head_Tasks);
    sub_head_Tasks.appendChild(button_Today);
    sub_head_Tasks.appendChild(button_Important);
    sub_head_Tasks.appendChild(button_Planned);
    sub_head_Tasks.appendChild(button_Completed);
    side_main_head.appendChild(sub_head_Projects);
    sub_head_Projects.appendChild(button_New_Project);
    sub_head_Projects.appendChild(projects_head);
    projects_head.appendChild(default_Folder)
    
    directory_render()
    render_today()

}
export {sidebarrender}