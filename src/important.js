import { clear_render } from "./clear_render"
import { mainpage } from "./mainpage_render"
import { complete } from "./marking_complete"
import { task_render } from "./task_render"
const render_important=()=>{
    let main=document.querySelector("#main")
    clear_render(main)
    mainpage(main,2)
    task_render(main,2)
    complete(main,2)

}
export {render_important}