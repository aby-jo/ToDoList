import { clear_render } from "./clear_render"
import { delete_direc } from "./delete_directory"
import { dtask_render } from "./directory_task_render"
import folderlogo from "./img/folder_logo.svg"
import deletelogo from "./img/delete_logo.svg"

let directory_render=()=>{
    let sub_head=document.querySelector("#projects_head")
    clear_render(sub_head)
    let projects=JSON.parse(localStorage.getItem("projects"))
    projects.forEach(project => {
        let directory_element=document.createElement("div")
        directory_element.classList.add("css_tasks")
        let directory=document.createElement("div")
        directory.textContent=project
        const directory_img=document.createElement("img")
        directory_img.classList.add("tasklogo")
        directory_img.src=folderlogo
        directory_element.appendChild(directory_img)
        directory_element.addEventListener("click",()=>{
            dtask_render(project)
        })
        directory.classList.add("folderoptions")

        sub_head.appendChild(directory_element)
        directory_element.appendChild(directory)
        
        if(project!="Root"){
        let delete_directory=document.createElement("button")
        delete_directory.id="deleteproject"
        let deleteicon=document.createElement("img")
        deleteicon.src=deletelogo
        delete_directory.appendChild(deleteicon)
        delete_directory.addEventListener("click",()=>{
            event.stopPropagation();
            delete_direc(project)
        })
        directory_element.appendChild(delete_directory)}
        
        
        

    });


}
export {directory_render}