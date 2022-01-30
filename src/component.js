function component(){
    const element = document.createElement('div');
    const myImage = new Image();
    myImage.src = '../images/header.jpg';
    element.textContent = 'That restaurant is the best for pizza eating while nerding out';
    element.appendChild(myImage);
    return element;
}

export default component;