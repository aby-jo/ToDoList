let about=function(){
    let content=document.querySelector("#content")
    let about=document.createElement("div")
    about.classList.add("about")
    let head=document.createElement("div")
    head.classList.add("abouthead")
    head.textContent="Located in the heart of San Francisco, we take pride in serving delicious, thoughtfully prepared dishes that celebrate the rich flavors and traditions of the entire world. Every meal is crafted with the freshest ingredients and a commitment to quality. Whether you’re here for a family gathering, a romantic dinner, or a quick bite with friends, our menu offers something to delight every palate—from timeless classics to innovative new creations. Our mission is simple: to create unforgettable dining experiences through exceptional food, outstanding service, and a sense of community. Come join us and discover why we’re more than just a restaurant—we’re your home for great taste and cherished moments."
    about.appendChild(head)
    content.appendChild(about)

}
export{about}