import { clear_render } from "./clear_render";
import { mainpage } from "./mainpage_render";
import { complete } from "./marking_complete";
import { task_render } from "./task_render";

const edit_dialog=(main,identifier,count)=>{
    const dialog=document.createElement("dialog");
    dialog.classList.add("dialog")
    let task
    if(task=JSON.parse(localStorage.getItem(`task${count}`))){


    const titleInput=document.createElement("input");
    titleInput.placeholder="Title*";
    titleInput.classList.add("dialogtitle","inputbox")
    titleInput.value=task.title

    const descriptionInput = document.createElement("input");
    descriptionInput.placeholder = "Description*";
    descriptionInput.classList.add("dialogdescription","inputbox")
    descriptionInput.value = task.description;

    const foldercontainer=document.createElement("div")
    foldercontainer.classList.add("container")
    foldercontainer.textContent="Project*"
    const folder=document.createElement("select")
    folder.classList.add("box")
    foldercontainer.appendChild(folder)
    folder.value=task.directory
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
    dueDateInput.type = "date";
    dueDateInput.classList.add("box")
    dueDateInput.value=task.dueDate
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
    priorityInput.value=task.priority

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
}
export {edit_dialog}