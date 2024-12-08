let home=function(){
    let content=document.querySelector("#content")
    let textbox=document.createElement("div")
    textbox.classList.add("textbox")
    let para=document.createElement("p")
    para.classList.add("para")
    para.textContent="Welcome to Tony'S"
    let text=document.createElement("div")
    text.classList.add("text")
    text.innerHTML=`Where Flavor Meets Elegance Indulge in a culinary journey like no other. At Tony's , we craft dishes inspired by the finest traditions and modern creativity, using fresh, locally sourced ingredients to delight your senses.
    Timings:Monday to Friday,<br>From:9:00 am to 11:00pm,<br.<br>Location:North Beach,San Francisco`
    textbox.appendChild(para)
    textbox.appendChild(text)
    content.appendChild(textbox)
}
export {home}