import { date } from "./date";
import { delete_task } from "./delete_task";
import { edit_dialog } from "./edit_dialog";

const createTaskElement = (task, counter) => {
    const taskElement = document.createElement("div");
    const title = document.createElement("div");
    title.textContent = task.title;
    const description = document.createElement("div");
    description.textContent = task.description;
    const dueDate = document.createElement("div");
    dueDate.textContent = task.dueDate;
    const priority = document.createElement("div");
    priority.textContent = task.priority;

    const checkbox = document.createElement("button");
    checkbox.textContent = "Check";
    checkbox.classList.add("check");
    checkbox.value = Number(counter);

    taskElement.appendChild(title);
    taskElement.appendChild(dueDate);
    taskElement.appendChild(priority);
    taskElement.appendChild(checkbox);

    return taskElement;
};

const task_render = (main, identifier) => {
    let counter = 1;
    const alltasks=document.createElement("div")
    alltasks.id="alltasks"

    for(counter;counter<=JSON.parse(localStorage.getItem("taskcount"));counter++) {
        const taskString = localStorage.getItem(`task${counter}`);
        if (!taskString) continue;
        
        const task = JSON.parse(taskString);
        const status = task.status;
        let directory=task.directory;
        let flag = false;

        if (identifier === 1) {
            flag = date(task.dueDate) && status;
        } else if (identifier === 2) {
            flag = task.priority === "High" && status;
        } else if (identifier === 3) {
            if(status===true){
                flag=true
            }
        } else if(identifier==4){
            flag = !status;
        }
        else{
            if(directory==identifier && status){
            flag=true;}
        }

        if (flag) {
            let taskElement = createTaskElement(task, counter);
            alltasks.appendChild(taskElement);
            main.appendChild(alltasks)
            let count=task.count
            taskElement.addEventListener("click",()=>{
            let dflag=document.querySelector(`#descript${count}`)
                if(!dflag){
                let descript = document.createElement("div");
                descript.id=`descript${count}`
                descript.dataset.checkvalue = "true";
                descript.textContent = task.description;
                taskElement.appendChild(descript);
                }
                if (!dflag) {
                    let edit_button = document.createElement("button");
                    edit_button.textContent = "Edit";
                    edit_button.classList.add("editbutton")
                    edit_button.addEventListener("click", () => {
                        edit_dialog(main,identifier,count)
                    });
                    let delete_button= document.createElement("button")
                    delete_button.textContent="Delete"
                    delete_button.classList.add("deletebutton")
                    delete_button.addEventListener("click",()=>{
                        delete_task(main,identifier,count)
                    })
        
                    taskElement.appendChild(edit_button);
                    taskElement.appendChild(delete_button);
                } else {
                    if (dflag) {
                        taskElement.removeChild(dflag); 
                    }
                    let edit_button = taskElement.querySelector(".editbutton");
                    if (edit_button) {
                        taskElement.removeChild(edit_button); 
                    }
                    let delete_button = taskElement.querySelector(".deletebutton");
                    if(delete_button){
                        taskElement.removeChild(delete_button)
                    }
                
                }
            })
        }

    }
};

export { task_render };
