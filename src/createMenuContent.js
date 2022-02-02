function createMenuContent(){
    const wrapper  = document.createElement('div');
    const menuDiv = document.createElement('div');
    const pizzaDiv = document.createElement('div');
    const item1Name = document.createElement('div')
    const item1Desc = document.createElement('div')
    const pizzaDiv2 = document.createElement('div');
    const item2Name = document.createElement('div')
    const item2Desc = document.createElement('div')
    const pizzaDiv3 = document.createElement('div');
    const item3Name = document.createElement('div')
    const item3Desc = document.createElement('div')

    wrapper.id ='wrapper';
    wrapper.appendChild(menuDiv);

    menuDiv.classList.add('menu-div')
    menuDiv.appendChild(pizzaDiv);
    pizzaDiv.classList.add('pizza-div')
    pizzaDiv.appendChild(item1Name)
    item1Name.classList.add('item-name')
    item1Name.textContent = 'SPIDERMAN | 9,95 €'
    pizzaDiv.appendChild(item1Desc)
    item1Desc.classList.add('item-desc')
    item1Desc.textContent = 
    'Tomate, ketchup, mozzarella, hotdog, cebolla caramelizada, cebolla crujiente, bacon y queso crema'
    let pizzaImg = new Image()
    pizzaImg.src = '../images/pizza1.jpg'
    pizzaDiv.appendChild(pizzaImg)

    menuDiv.appendChild(pizzaDiv2)
    pizzaDiv2.classList.add('pizza-div')
    pizzaDiv2.appendChild(item2Name)
    item2Name.classList.add('item-name')
    item2Name.textContent = 'SPIDERMAN | 9,95 €'
    pizzaDiv2.appendChild(item2Desc)
    item2Desc.classList.add('item-desc')
    item2Desc.textContent = 
    'Tomate, ketchup, mozzarella, hotdog, cebolla caramelizada, cebolla crujiente, bacon y queso crema'
    let pizzaImg2 = new Image()
    pizzaImg2.src = '../images/pizza1.jpg'
    pizzaDiv2.appendChild(pizzaImg2)

    menuDiv.appendChild(pizzaDiv3)
    pizzaDiv3.classList.add('pizza-div')
    pizzaDiv3.appendChild(item3Name)
    item3Name.classList.add('item-name')
    item3Name.textContent = 'SPIDERMAN | 9,95 €'
    pizzaDiv3.appendChild(item3Desc)
    item3Desc.classList.add('item-desc')
    item3Desc.textContent = 
    'Tomate, ketchup, mozzarella, hotdog, cebolla caramelizada, cebolla crujiente, bacon y queso crema'
    let pizzaImg3 = new Image()
    pizzaImg3.src = '../images/pizza1.jpg'
    pizzaDiv3.appendChild(pizzaImg3)
    
    return wrapper;
}

export default createMenuContent;