import appendHeader from "./appendHeader";
import appendButtonMenu from "./appendButtonMenu";
import createHomeContent from "./createHomeContent";
import createMenuContent from "./createMenuContent";
import createContactContent from "./createContactContent";

const bodyReference = document.querySelector('body');
const contentReference = document.getElementById('content');
const background = document.createElement('div')
background.classList.add('bg')

bodyReference.appendChild(background);
bodyReference.appendChild(appendHeader());
bodyReference.appendChild(contentReference);
contentReference.appendChild(appendButtonMenu());
contentReference.appendChild(createHomeContent());


(function addEventListenersButton(){
const buttonHomeReference = document.querySelector('.tab-home-button');
buttonHomeReference.addEventListener('click', () =>{
try{
    const wrapperReference = document.getElementById('wrapper');
    wrapperReference.remove()
}catch (e){
}
    contentReference.appendChild(createHomeContent());
});

const buttonMenuReference = document.querySelector('.tab-menu-button');
buttonMenuReference.addEventListener('click', () =>{
    try{
        const wrapperReference = document.getElementById('wrapper');
        wrapperReference.remove()
    }catch (e){
    }
    contentReference.appendChild(createMenuContent());
})

const buttonContactReference = document.querySelector('.tab-contact-button');
buttonContactReference.addEventListener('click', () =>{
    try{
        const wrapperReference = document.getElementById('wrapper');
        wrapperReference.remove()
    }catch (e){
    }
    contentReference.appendChild(createContactContent());
})
})();


