import spiderman from '../src/images/spiderman.png'
import iamgroot from '../src/images/iamgroot.png'
import davidbowie from '../src/images/david-bowie.png'
import harrypotter from '../src/images/harry-potter.png'
import joker from '../src/images/joker.png'
import ghostbusters from '../src/images/ghostbusters.png'
import blackpanther from '../src/images/black-panther.png'
import hulk from '../src/images/hulk.png'
import scream from '../src/images/scream.png'
function createMenuContent(){
    const wrapper  = document.createElement('div');
    const menuDiv = document.createElement('div');

    wrapper.id ='wrapper';
    wrapper.appendChild(menuDiv);
    menuDiv.classList.add('menu-div');

    let menu = {
        pizza1:{
            name: 'SPIDERMAN | 9,95',
            desc: 'Tomato, ketchup, mozzarella, hotdog, caramelized onion, crispy onion, bacon and cream cheese',
            imgPath: spiderman
        },
        pizza2:{
            name:'I AM GROOT | 12,95 €',
            desc: 'Tomato, Fior di Latte mozzarella, candied artichokes, aubergines, courgette, black olives, pepper and onion.',
            imgPath:iamgroot
        },
        pizza3:{
            name:'DAVID BOWIE | 12,95€',
            desc:'Veal, mustard, onion, Fior di Latte mozzarella, candied red pepper and cream cheese',
            imgPath:davidbowie
        },
        burguer1:{
            name:'HARRY POTTER | 8,95€',
            desc:'Lettuce, tomato, fried egg, ham shavings, straw potatoes and brava sauce.',
            imgPath:harrypotter
        },
        burguer2:{
            name:'JOKER | 13,95€',
            desc:'Smoked Beyond Burger ®, lettuce, tomato, cheddar cheese, fried onion, red cabbage, pulled heura and guacamole.',
            imgPath:joker
        },
        burguer3:{
            name:'GHOSTBUSTERS | 8,95€',
            desc:'Lettuce, tomato, cheddar cheese, bacon, guacamole, pico de gallo and tortilla chips',
            imgPath:ghostbusters
        },
        dessert1:{
            name:'BLACK PANTHER | 5,50€',
            desc:'Chocolate sacher cake.',
            imgPath:blackpanther
        },
        dessert2:{
            name:'HULK | 5,50€',
            desc:'Pistachio and chocolate coulant.',
            imgPath:hulk
        },
        dessert3:{
            name:'SCREAM | 5,95€',
            desc:'Artisan cream cup with ice cream and Oreo®.',
            imgPath:scream
        }
    };

    (function createItemDiv (menu){
        
        // iterate array of objects
        Object.values(menu).forEach((element) => {
        
        // create general div, name div, desc div and image div
        const itemMenuDiv = document.createElement('div');
        const itemName = document.createElement('div');
        const itemDesc = document.createElement('div');
        const itemImageDiv = document.createElement('div');
        let itemImage = new Image();

        // append their properties respectively to those divs
        menuDiv.appendChild(itemMenuDiv);
        itemMenuDiv.classList.add('item-div');
        
        itemMenuDiv.appendChild(itemName);
        itemName.classList.add('item-name');
        itemName.textContent = element.name;

        itemMenuDiv.appendChild(itemDesc);
        itemDesc.classList.add('item-desc');
        itemDesc.textContent = element.desc;

        itemMenuDiv.appendChild(itemImageDiv);
        itemImageDiv.classList.add('image-menu-div');
        itemImage.src = element.imgPath;
        itemImageDiv.appendChild(itemImage);
        })
    })(menu);
    
    return wrapper;
}

export default createMenuContent;