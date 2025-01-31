const clear_render=(main)=>{
    if(main && main.children.length>0){
    main.innerHTML='';}
    else{
        return true
    }
}
export { clear_render}