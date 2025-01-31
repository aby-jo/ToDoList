import { directory_render } from "./directory_render"

let new_project=(value)=>{
    if(value=="Default"){
        alert("Only one default directory")
    }
    else{
    let sub_head=document.querySelector("#projects_head")
    let new_project_name=document.createElement("div")
    new_project_name.textContent=value
    new_project_name.classList.add("folderoptions")
    sub_head.appendChild(new_project_name)
    let projects=JSON.parse(localStorage.getItem("projects"))
    projects.push(value)
    localStorage.setItem("projects",JSON.stringify(projects))
    directory_render()}

}
export {new_project}