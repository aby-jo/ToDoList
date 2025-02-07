import { date } from "./date";
import { delete_task } from "./delete_task";
import { edit_dialog } from "./edit_dialog";
import checkimg from "./img/check_logo.svg"
import { newdate_format } from "./newdate_render";
import folderlogo from "./img/folder_logo.svg"
import logoedit from "./img/edit_logo.svg"
import logodelete from "./img/delete_logo.svg"

const createTaskElement = (task, counter,identifier) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("individualtask")
    const title = document.createElement("div");
    title.textContent = task.title;
    title.classList.add("tasktitle")
    if(identifier==4){
        title.classList.add("completed")
    }
    const description = document.createElement("div");
    description.textContent = task.description;
    const dueDate = document.createElement("div");
    dueDate.classList.add("date")
    const [formatnewday,formatnewdate,formatnewmonth]=newdate_format(task.dueDate)
    const day=document.createElement("div")
    day.textContent=formatnewday
    const dash=document.createElement("div")
    dash.textContent="-"
    const date=document.createElement("div")
    date.textContent=formatnewdate
    const month=document.createElement("div")
    month.textContent=formatnewmonth
    dueDate.appendChild(day)
    dueDate.appendChild(dash)
    dueDate.appendChild(date)
    dueDate.appendChild(month)

    const svgNamespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.classList.add("svgelement")
    svg.setAttribute("width", "12");
    svg.setAttribute("height", "12");
    const circle = document.createElementNS(svgNamespace, "circle");
    circle.setAttribute("cx", "6");
    circle.setAttribute("cy", "6");
    circle.setAttribute("r", "4");
    svg.appendChild(circle);
    const priorityvalue=task.priority
    if(priorityvalue=="High"){
        circle.classList.add("highp")
    }
    else if(priorityvalue=="Medium"){
        circle.classList.add("mediump")}
    else{
        circle.classList.add("lowp")
    }
    const checkbox = document.createElement("button");
    checkbox.classList.add("check");
    checkbox.value = Number(counter);
    const checklogo=document.createElement("img")
    checklogo.src=checkimg
    checklogo.classList.add("checklogo")
    checkbox.appendChild(checklogo)

    taskElement.appendChild(checkbox);
    taskElement.appendChild(title);
    taskElement.appendChild(svg);
    taskElement.appendChild(dueDate);
    

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
            let taskElement = createTaskElement(task, counter,identifier);
            alltasks.appendChild(taskElement);
            main.appendChild(alltasks)
            let count=task.count
            taskElement.addEventListener("click",()=>{
            let dflag=document.querySelector(`#descript${count}`)
                if(!dflag){
                let descript = document.createElement("div");
                descript.id=`descript${count}`
                descript.classList.add("description")
                descript.dataset.checkvalue = "true";
                descript.textContent = task.description;
                taskElement.appendChild(descript);
                }
                if (!dflag) {
                    let folder=document.createElement("div")
                    folder.classList.add("folder")
                    let foldername=document.createElement("div")
                    foldername.textContent=task.directory
                    let logofolder=document.createElement("img")
                    logofolder.classList.add("folderlogo")
                    logofolder.src=folderlogo
                    folder.appendChild(logofolder)
                    folder.appendChild(foldername)
                    let edit_button = document.createElement("button");
                    edit_button.classList.add("editbutton")
                    const editlogo=document.createElement("img")
                    editlogo.src=logoedit
                    editlogo.classList.add("dlogo")
                    edit_button.appendChild(editlogo)
                    edit_button.addEventListener("click", () => {
                        edit_dialog(main,identifier,count)
                    });
                    let delete_button= document.createElement("button")
                    delete_button.classList.add("deletebutton")
                    const deletelogo=document.createElement("img")
                    deletelogo.src=logodelete
                    deletelogo.classList.add("dlogo")
                    delete_button.appendChild(deletelogo)
                    delete_button.addEventListener("click",()=>{
                        delete_task(main,identifier,count)
                    })
                    taskElement.appendChild(folder)
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
                    let folder = taskElement.querySelector(".folder");
                    if(folder){
                        taskElement.removeChild(folder)
                    }
                
                }
            })
        }

    }
};

export { task_render };
