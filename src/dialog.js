import { clear_render } from "./clear_render";
import { mainpage } from "./mainpage_render";
import { complete } from "./marking_complete";
import { task_render } from "./task_render";
import { todo } from "./todoos";
const render_dialog=(main,identifier)=>{
    const dialog=document.createElement("dialog");
    dialog.classList.add("dialog")

    const titleInput=document.createElement("input");
    titleInput.placeholder="Title*";
    titleInput.classList.add("dialogtitle","inputbox")

    
    const descriptionInput = document.createElement("textarea");
    descriptionInput.placeholder = "Description*";
    descriptionInput.classList.add("dialogdescription","inputbox")

    const foldercontainer=document.createElement("div")
    foldercontainer.classList.add("container")
    foldercontainer.textContent="Project*"
    const folder=document.createElement("select")
    folder.classList.add("box")
    foldercontainer.appendChild(folder)
    let folder_options=document.querySelectorAll(".folderoptions")
    folder_options.forEach((fold)=>{
        const option = document.createElement("option");
        option.value = fold.textContent;
        option.textContent = fold.textContent;
        folder.appendChild(option);
        
    })
    const dueDatecontainer=document.createElement("div")
    dueDatecontainer.classList.add("container")
    dueDatecontainer.textContent="Duedate*"
    const dueDateInput = document.createElement("input");
    dueDateInput.classList.add("box")
    dueDateInput.type = "date";
    dueDatecontainer.appendChild(dueDateInput)

    const prioritycontainer=document.createElement("div")
    prioritycontainer.classList.add("container")
    prioritycontainer.textContent="Priority*"
    const priorityInput = document.createElement("select");
    priorityInput.classList.add("box")
    prioritycontainer.appendChild(priorityInput)
    const priorities = ["Low", "Medium", "High"];
    priorities.forEach((priority) => {
        const option = document.createElement("option");
        option.value = priority;
        option.textContent = priority;
        priorityInput.appendChild(option);
    });
    const buttons=document.createElement("div")
    buttons.classList.add("buttoncontainer")
    const cancel_button=document.createElement("button")
    cancel_button.textContent="Cancel"
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
    cancel_button.addEventListener("click",()=>{
        dialog.close()
        clear_render(main)
        mainpage(main,identifier)
        task_render(main,identifier);
        complete(main,identifier)
    })

    main.appendChild(dialog);
    dialog.appendChild(titleInput);
    dialog.appendChild(descriptionInput);
    dialog.appendChild(dueDatecontainer);
    dialog.appendChild(prioritycontainer);
    dialog.appendChild(foldercontainer)
    dialog.appendChild(buttons)
    buttons.appendChild(cancel_button)
    buttons.appendChild(submit_Button);
    

    

    dialog.showModal();
    return 1;
    

}
export {render_dialog}