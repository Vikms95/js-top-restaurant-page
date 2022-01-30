import appendHeader from "./appendHeader";
import appendButtonMenu from "./appendButtonMenu";
import tabHomeContent from "./tabHomeContent";
import tabMenuContent from "./tabMenuContent";
import tabContactContent from "./tabContactContent";

const divReference = document.getElementById('content');

divReference.appendChild(appendButtonMenu());
divReference.appendChild(appendHeader());

const buttonHomeReference = document.querySelector('.tab-home-button');
buttonHomeReference.addEventListener('click', () =>{
    tabHomeContent();
});

const buttonMenuReference = document.querySelector('.tab-menu-button');
buttonMenuReference.addEventListener('click', () =>{
    tabMenuContent();
})

const buttonContactReference = document.querySelector('.tab-contact-button');
buttonContactReference.addEventListener('click', () =>{
    tabContactContent();
})


