import { clear_render } from "./clear_render";
import { mainpage } from "./mainpage_render";
import { complete } from "./marking_complete";
import { task_render } from "./task_render";

const edit_dialog=(main,identifier,count)=>{
    const dialog=document.createElement("dialog");
    let task
    if(task=JSON.parse(localStorage.getItem(`task${count}`))){


    const titleInput=document.createElement("input");
    titleInput.value=task.title

    const descriptionInput = document.createElement("input");
    descriptionInput.value = task.description;

    const folder=document.createElement("select")
    folder.value=task.directory
    let folder_options=document.querySelectorAll(".folderoptions")
    folder_options.forEach((fold)=>{
        const option = document.createElement("option");
        option.value = fold.textContent;
        option.textContent = fold.textContent;
        folder.appendChild(option);
        
    })

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.value=task.dueDate

    const priorityInput = document.createElement("select");
    const priorities = ["Low", "Medium", "High"];
    priorities.forEach((priority) => {
        const option = document.createElement("option");
        option.value = priority;
        option.textContent = priority;
        priorityInput.appendChild(option);
    });
    priorityInput.value=task.priority
    const submit_Button=document.createElement("button"); 
    submit_Button.id="submit";
    submit_Button.textContent="Submit";
    submit_Button.addEventListener("click",()=>{
        const title = titleInput.value;
        const description = descriptionInput.value;
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;
        const directory = folder.value;
            dialog.close()
            if(task){
                task.title=title
                task.description=description
                task.dueDate=dueDate
                task.priority=priority
                task.directory=directory
                submit_Button.value=task.count
                localStorage.setItem(`task${task.count}`,JSON.stringify(task));
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
}
export {edit_dialog}