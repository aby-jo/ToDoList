import { render_dialog } from "./dialog";
const mainpage=(main,identifier)=>{
    let head;
    if(identifier==1){
        head="Today"
    }
    else if(identifier==2){
        head="Important"
    }
    else if(identifier==3){
        head="Planned"
    }
    else if(identifier==4){
        head="Completed"
    }
    else{
        head=identifier
    }
    const render=document.createElement("div");

    const heading=document.createElement("div");
    heading.textContent=head;

    const pending_Count=document.createElement("div");
    pending_Count.id="pendingCount"
    const pstatus=document.createElement("div");
    const pcount=document.createElement("div");
    pcount.id="pcount"
    pstatus.textContent="Pending";
    let temp2;
    let temp_string2=localStorage.getItem("pendingCount")
    if(temp_string2!==null){
        temp2=JSON.parse(temp_string2)
        pcount.textContent=temp2
    }
    else{
        temp2=0
        pcount.textContent=temp2
        localStorage.setItem("pendingCount",temp2)
    }

    const completed_Count=document.createElement("div");
    const cstatus=document.createElement("div");
    const ccount=document.createElement("div");
    ccount.id="ccount"
    cstatus.textContent="Completed";
    let temp;
    let temp_string=localStorage.getItem("completedCount")
    if(temp_string!==null){
        temp=JSON.parse(temp_string)
        ccount.textContent=temp
    }
    else{
        temp=0
        ccount.textContent=temp
        localStorage.setItem("completedCount",temp)
    }

    const new_Task=document.createElement("button");
    new_Task.textContent="New Task";

    main.appendChild(render)
    render.appendChild(heading);

    render.appendChild(pending_Count);
    pending_Count.appendChild(pstatus);
    pending_Count.appendChild(pcount);
    
    render.appendChild(completed_Count);
    completed_Count.appendChild(cstatus);
    completed_Count.appendChild(ccount);

    render.appendChild(new_Task);
    

    new_Task.addEventListener("click", ()=>{
        render_dialog(main,identifier)
})
    

}
export{mainpage}