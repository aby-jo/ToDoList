import { clear_render } from "./clear_render"
import { mainpage } from "./mainpage_render"
import { complete } from "./marking_complete"
import { task_render } from "./task_render"

let dtask_render=(val)=>{
    let main=document.querySelector("#main")
    clear_render(main)
    mainpage(main,val)
    task_render(main,val)
    complete(main,val);
}
export {dtask_render}