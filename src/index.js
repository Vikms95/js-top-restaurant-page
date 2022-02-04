import appendHeader from "./appendHeader";
import appendButtonMenu from "./appendButtonMenu";
import createHomeContent from "./createHomeContent";
import createMenuContent from "./createMenuContent";
import createContactContent from "./createContactContent";
import appendFooter from "./appendFooter";


const bodyReference = document.querySelector('body');

//Only content from the DOM created manually
const contentReference = document.getElementById('content');
const background = document.createElement('div');
background.classList.add('bg');

bodyReference.appendChild(background);
bodyReference.appendChild(appendHeader());
bodyReference.appendChild(contentReference);
contentReference.appendChild(appendButtonMenu());
contentReference.appendChild(createHomeContent());
bodyReference.appendChild(appendFooter());

(function addEventListenersButton(){
    const buttonHomeReference = document.querySelector('.tab-home-button');
    const buttonMenuReference = document.querySelector('.tab-menu-button');
    const buttonContactReference = document.querySelector('.tab-contact-button');
    buttonHomeReference.addEventListener('click', () =>{
        const wrapperReference = document.getElementById('wrapper');
        wrapperReference.remove();
        contentReference.appendChild(createHomeContent());
    });
    buttonMenuReference.addEventListener('click', () =>{
        const wrapperReference = document.getElementById('wrapper');
        wrapperReference.remove();
        contentReference.appendChild(createMenuContent());
    })
    buttonContactReference.addEventListener('click', () =>{
        const wrapperReference = document.getElementById('wrapper');
        wrapperReference.remove();
        contentReference.appendChild(createContactContent());
    })
})();


