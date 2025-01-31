import { clear_render } from "./clear_render";
import { mainpage } from "./mainpage_render";
import { complete } from "./marking_complete";
import { task_render } from "./task_render";

let delete_task=(main,identifier,count)=>{
    let task=JSON.parse(localStorage.getItem(`task${count}`))
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
    

    localStorage.removeItem(`task${count}`)
    clear_render(main)
    mainpage(main,identifier)
    task_render(main,identifier);
    complete(main,identifier)
}
export {delete_task}