let menu=function(){
    let content=document.querySelector("#content")
    let menu=document.createElement("div")
    menu.classList.add("menu")
    let group1=document.createElement("div")
    group1.classList.add("group")
    group1.textContent="Starters:"
    let head1=document.createElement("div")
    head1.classList.add("head")
    head1.textContent="1.Garlic Herb Bruschetta"
    let desc1=document.createElement("div")
    desc1.classList.add("desc")
    desc1.textContent=" Crisp baguette slices topped with fresh tomatoes, garlic, basil, and a drizzle of balsamic glaze."
    let head2=document.createElement("div")
    head2.classList.add("head")
    head2.textContent="2.Creamy Spinach & Artichoke Dip"
    let desc2=document.createElement("div")
    desc2.classList.add("desc")
    desc2.textContent="A rich blend of cheeses, spinach, and artichokes, served with warm pita bread or crispy tortilla chips."
    let group2=document.createElement("div")
    group2.classList.add("group")
    group2.textContent="Entrees:"
    let head3=document.createElement("div")
    head3.classList.add("head")
    head3.textContent="1.Grilled Lemon Herb Chicken"
    let desc3=document.createElement("div")
    desc3.classList.add("desc")
    desc3.textContent="Juicy chicken breast marinated in lemon, garlic, and rosemary, served with roasted vegetables and wild rice."
    let head4=document.createElement("div")
    head4.classList.add("head")
    head4.textContent="2.Classic Margherita Pizza"
    let desc4=document.createElement("div")
    desc4.classList.add("desc")
    desc4.textContent="A thin-crust pizza topped with fresh mozzarella, vine-ripened tomatoes, and basil leaves for an authentic Italian flavor."
    let group3=document.createElement("div")
    group3.classList.add("group")
    group3.textContent="Desserts:"
    let head5=document.createElement("div")
    head5.classList.add("head")
    head5.textContent="1.Chocolate Lava Cake"
    let desc5=document.createElement("div")
    desc5.classList.add("desc")
    desc5.textContent="A decadent molten chocolate cake served warm with a scoop of vanilla ice cream."
    let head6=document.createElement("div")
    head6.classList.add("head")
    head6.textContent="2.Tiramisu"
    let desc6=document.createElement("div")
    desc6.classList.add("desc")
    desc6.textContent="Layers of coffee-soaked ladyfingers, mascarpone cream, and cocoa powder for a rich Italian classic."



    
    group1.appendChild(head1)
    group1.appendChild(desc1)
    group1.appendChild(head2)
    group1.appendChild(desc2)
    group2.appendChild(head3)
    group2.appendChild(desc3)
    group2.appendChild(head4)
    group2.appendChild(desc4)
    group3.appendChild(head5)
    group3.appendChild(desc5)
    group3.appendChild(head6)
    group3.appendChild(desc6)
    menu.appendChild(group1)
    menu.appendChild(group2)
    menu.appendChild(group3)
    content.appendChild(menu)
}
export{menu}