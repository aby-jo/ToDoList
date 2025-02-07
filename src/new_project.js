import { directory_render } from "./directory_render"

let new_project=(value)=>{
    let flag=true;
    let projects=JSON.parse(localStorage.getItem("projects"))
    if(value=="Root"){
        alert("Only one Root directory")
    }
    else{
        projects.forEach(project => {
            if(value==project){
                flag=false
            }
        });
    }
    if(flag){
    let sub_head=document.querySelector("#projects_head")
    let new_project_name=document.createElement("div")
    new_project_name.textContent=value
    new_project_name.classList.add("folderoptions")
    sub_head.appendChild(new_project_name)
    projects.push(value)
    localStorage.setItem("projects",JSON.stringify(projects))
    directory_render()}
    else{
        alert("No duplicate directories")
    }

}
export {new_project}