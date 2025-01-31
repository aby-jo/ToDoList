import { clear_render } from "./clear_render";
import { mainpage } from "./mainpage_render";
import { complete } from "./marking_complete";
import { task_render } from "./task_render";
const render_today=()=>{
    let main=document.querySelector("#main")
    clear_render(main)
    mainpage(main,1)
    task_render(main,1)
    complete(main,1);

}
export {render_today}