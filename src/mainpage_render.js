import newtaskimg from "./img/addcircle_img.svg"
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
    render.classList.add("render")

    const heading=document.createElement("div");
    heading.classList.add("heading")
    heading.textContent=head;
    const count=document.createElement("div")
    count.classList.add("counts")
    const pending_Count=document.createElement("div");
    pending_Count.classList.add("individualcount")
    const pstatus=document.createElement("div");
    pstatus.classList.add("status")
    const pcount=document.createElement("div");
    pcount.id="pcount"
    pcount.classList.add("count")
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
    completed_Count.classList.add("individualcount")
    const cstatus=document.createElement("div");
    const ccount=document.createElement("div");
    cstatus.classList.add("status")
    ccount.classList.add("count")
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
    let new_Task_txt=document.createElement("div")
    new_Task_txt.id="newtasktext"
    new_Task_txt.textContent="New Task"
    let new_Task_img=document.createElement("img")
    new_Task_img.classList.add("newlogo")
    new_Task_img.src=newtaskimg
    new_Task.classList.add("newtaskbtn")
    new_Task.appendChild(new_Task_img)
    new_Task.appendChild(new_Task_txt)

    main.appendChild(render)
    render.appendChild(heading);
    render.appendChild(count)
    count.appendChild(pending_Count);

    pending_Count.appendChild(pcount);
    pending_Count.appendChild(pstatus);
    
    count.appendChild(completed_Count);
    completed_Count.appendChild(ccount);
    completed_Count.appendChild(cstatus);

    render.appendChild(new_Task);
    

    new_Task.addEventListener("click", ()=>{
        render_dialog(main,identifier)
})
    

}
export{mainpage}