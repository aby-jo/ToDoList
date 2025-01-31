import { clear_render } from "./clear_render"
import { mainpage } from "./mainpage_render"
import { complete } from "./marking_complete"
import { task_render } from "./task_render"
const render_planned=()=>{
    let main=document.querySelector("#main")
    clear_render(main)
    mainpage(main,3)
    task_render(main,3);
    complete(main,3)

}
export {render_planned}