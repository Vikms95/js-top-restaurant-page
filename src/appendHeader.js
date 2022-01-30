function appendHeader(){

    const element = document.createElement('div');
    element.classList.add('header');
    element.textContent = 'That restaurant is the best for pizza eating while nerding out';
    
    const myImage = new Image();
    myImage.src = '../images/header.jpg';
    element.appendChild(myImage);
    
    
    return element;
}

export default appendHeader;