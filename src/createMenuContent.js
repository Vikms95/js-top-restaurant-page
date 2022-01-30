function tabMenuContent(){

    const element = document.createElement('div');
    element.classList.add('menu-content');
    element.textContent = 'THIS IS MENU HEADER is the best for pizza eating while nerding out';
    
    const myImage = new Image();
    myImage.src = '../images/header.jpg';
    element.appendChild(myImage);
    
    return element;
}

export default tabMenuContent;