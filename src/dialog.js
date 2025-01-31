import { clear_render } from "./clear_render";
import { mainpage } from "./mainpage_render";
import { complete } from "./marking_complete";
import { task_render } from "./task_render";
import { todo } from "./todoos";
const render_dialog=(main,identifier)=>{
    const dialog=document.createElement("dialog");

    const titleInput=document.createElement("input");
    titleInput.placeholder="Your Name";

    const descriptionInput = document.createElement("input");
    descriptionInput.placeholder = "Description";

    const folder=document.createElement("select")
    let folder_options=document.querySelectorAll(".folderoptions")
    folder_options.forEach((fold)=>{
        const option = document.createElement("option");
        option.value = fold.textContent;
        option.textContent = fold.textContent;
        folder.appendChild(option);
        
    })

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";

    const priorityInput = document.createElement("select");
    const priorities = ["Low", "Medium", "High"];
    priorities.forEach((priority) => {
        const option = document.createElement("option");
        option.value = priority;
        option.textContent = priority;
        priorityInput.appendChild(option);
    });
    const submit_Button=document.createElement("button"); 
    submit_Button.id="submit";
    submit_Button.textContent="Submit";
    submit_Button.addEventListener("click",()=>{
        const title = titleInput.value;
        const description = descriptionInput.value;
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;
        const directory = folder.value;
        const count=1
        if (title && description && dueDate && priority && directory) {
            dialog.close();
            const task=new todo(title,description,dueDate,priority,directory,count);
            
            if(task){
                let pending_Count;
                if(pending_Count=localStorage.getItem("pendingCount")){
                pending_Count=Number(pending_Count)+1}
                else{
                    pending_Count=1
                }
                let taskcount
                if(JSON.parse(localStorage.getItem("taskcount"))){
                    taskcount= JSON.parse(localStorage.getItem("taskcount"))
                }
                else{
                    taskcount=1
                }
                submit_Button.value=taskcount
                task.count=taskcount
                localStorage.setItem(`task${taskcount}`,JSON.stringify(task));
                taskcount++
                localStorage.setItem("taskcount",taskcount)
                localStorage.setItem("pendingCount",pending_Count);
                
    
        }
        
       }
        clear_render(main)
        mainpage(main,identifier)
        task_render(main,identifier);
        complete(main,identifier)
        
    })

    main.appendChild(dialog);
    dialog.appendChild(titleInput);
    dialog.appendChild(descriptionInput);
    dialog.appendChild(dueDateInput);
    dialog.appendChild(priorityInput);
    dialog.appendChild(folder)
    dialog.appendChild(submit_Button);
    

    

    dialog.showModal();
    return 1;
    

}
export {render_dialog}