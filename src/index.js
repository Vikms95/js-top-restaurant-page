import appendHeader from "./appendHeader";
import appendButtonMenu from "./appendButtonMenu";
import createHomeContent from "./createHomeContent";
import createMenuContent from "./createMenuContent";
import createContactContent from "./createContactContent";

const bodyReference = document.querySelector('body');
const contentReference = document.getElementById('content');
const wrapperReference = document.getElementById('wrapper');
const homeReference = document.querySelector('.home-content')
const menuReference = document.querySelector('.menu-content');
const contactReference = document.querySelector('.contact-content');

bodyReference.appendChild(appendHeader());
bodyReference.appendChild(contentReference);
contentReference.appendChild(appendButtonMenu());
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


