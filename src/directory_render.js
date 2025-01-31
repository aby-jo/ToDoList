import { clear_render } from "./clear_render"
import { delete_direc } from "./delete_directory"
import { dtask_render } from "./directory_task_render"

let directory_render=()=>{
    let sub_head=document.querySelector("#projects_head")
    clear_render(sub_head)
    let projects=JSON.parse(localStorage.getItem("projects"))
    projects.forEach(project => {
        let directory_element=document.createElement("div")
        let directory=document.createElement("div")
        directory.textContent=project
        directory.addEventListener("click",()=>{
            dtask_render(project)
        })
        directory.classList.add("folderoptions")

        sub_head.appendChild(directory_element)
        directory_element.appendChild(directory)
        
        if(project!="Default"){
        let delete_directory=document.createElement("button")
        delete_directory.textContent="Delete"
        delete_directory.addEventListener("click",()=>{
            console.log(project)
            delete_direc(project)
        })
        directory_element.appendChild(delete_directory)}
        
        
        

    });


}
export {directory_render}