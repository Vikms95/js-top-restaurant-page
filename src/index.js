import appendHeader from "./appendHeader";
import appendButtonMenu from "./appendButtonMenu";
import createHomeContent from "./createHomeContent";
import createMenuContent from "./createMenuContent";
import createContactContent from "./createContactContent";

const bodyReference = document.querySelector('body');
const divReference = document.getElementById('content');
const homeReference = document.querySelector('.home-content')
const menuReference = document.querySelector('.menu-content');
const contactReference = document.getElementsByClassName('.contact-content');

bodyReference.appendChild(appendHeader());
bodyReference.appendChild(appendButtonMenu());
bodyReference.appendChild(divReference);

const buttonHomeReference = document.querySelector('.tab-home-button');
buttonHomeReference.addEventListener('click', () =>{
    divReference.textContent = '';
    divReference.appendChild(createHomeContent());
});

const buttonMenuReference = document.querySelector('.tab-menu-button');
buttonMenuReference.addEventListener('click', () =>{
    divReference.textContent = '';
    divReference.appendChild(createMenuContent());
})

const buttonContactReference = document.querySelector('.tab-contact-button');
buttonContactReference.addEventListener('click', () =>{
    createContactContent();
})


