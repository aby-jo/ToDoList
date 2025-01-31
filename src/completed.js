import { clear_render } from "./clear_render"
import { mainpage } from "./mainpage_render"
import { complete } from "./marking_complete"
import { task_render } from "./task_render"
const render_completed=()=>{
    let main=document.querySelector("#main")
    clear_render(main)
    mainpage(main,4)
    task_render(main,4)
    complete(main,4)
    
    

}
export {render_completed}