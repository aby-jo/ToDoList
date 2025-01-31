let date=(dueDate)=>{
    let today=new Date();
    let dueDateObj=new Date(dueDate)
    if(today.getFullYear() === dueDateObj.getFullYear() &&
    today.getMonth() === dueDateObj.getMonth() &&
    today.getDate() === dueDateObj.getDate()){
        return true;
    }
    
}
export {date}