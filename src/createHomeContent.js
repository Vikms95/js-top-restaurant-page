function createHomeContent(){

    const element = document.createElement('div');
    element.classList.add('home-content');
    element.textContent = 'That restaurant is the best for pizza eating while nerding out';
    
    const myImage = new Image();
    myImage.src = '../images/general_restaurant.jpg';
    element.appendChild(myImage);
    
    return element;
}

export default createHomeContent;