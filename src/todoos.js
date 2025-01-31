function todo(title,description,dueDate,priority,directory,count){
    this.title=title;
    this.description=description;
    this.dueDate=dueDate;
    this.priority=priority;
    this.status=true
    this.directory=directory
    this.count=count
}
export{todo}