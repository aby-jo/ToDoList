import { clear_render } from "./clear_render"
import { directory_render } from "./directory_render"
import { mainpage } from "./mainpage_render"
import { complete } from "./marking_complete"
import { task_render } from "./task_render"

let delete_direc=(value)=>{
    let taskcount=localStorage.getItem("taskcount")
    let main=document.querySelector("#main")
    let identifier="Root"
    let task
    let projects=JSON.parse(localStorage.getItem("projects"))
    projects=projects.filter(element => element!==value)
    localStorage.setItem("projects",JSON.stringify(projects))
    for(let i=0;i<=taskcount;i++){
        if(task=JSON.parse(localStorage.getItem(`task${i}`))){
            if(task.directory==value){
                if(task.status){
                    let pending_Count=JSON.parse(localStorage.getItem("pendingCount"))
                    pending_Count--
                    localStorage.setItem("pendingCount",JSON.stringify(pending_Count))
                }
                else{
                    let completed_Count=JSON.parse(localStorage.getItem("completedCount"))
                    completed_Count--
                    localStorage.setItem("completedCount",JSON.stringify(completed_Count))
                }
                let taskcount=JSON.parse(localStorage.getItem("taskcount"))
                taskcount--
                localStorage.setItem("taskcount",JSON.stringify(taskcount))
                localStorage.removeItem(`task${i}`)
            }
        }
    }
    directory_render()
    clear_render(main)
    mainpage(main,identifier)
    task_render(main,identifier);
    complete(main,identifier)
}
export{delete_direc}