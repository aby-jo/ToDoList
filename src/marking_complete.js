
import { updateTaskStatusUI } from "./updatetaskstatus"

const complete=()=>{
    let alltasks=document.querySelector("#alltasks")
    if(alltasks){
        alltasks.addEventListener("click",(event)=>{
            if(event.target.classList.contains("check")){
                const submit=event.target
                let valstring=localStorage.getItem(`task${submit.value}`)
                let val=JSON.parse(valstring)
            
                let pending_Count_String=localStorage.getItem("pendingCount")
                let pending_Count=Number(pending_Count_String)
                let completed_Count_String=localStorage.getItem("completedCount")
                let completed_Count=Number(completed_Count_String)
                if(val.status){
                val.status=false
                pending_Count--
                completed_Count++
                }
                else if(!val.status){
                    val.status=true
                    pending_Count++
                    completed_Count--
                    
                }
                localStorage.setItem("pendingCount",pending_Count)
                localStorage.setItem("completedCount",completed_Count)
                localStorage.setItem(`task${submit.value}`,JSON.stringify(val))
                
                updateTaskStatusUI(pending_Count, completed_Count);
                submit.closest("div").remove();
            
    }})}
    
}
export{complete}