function createHomeContent(){

    const element = document.createElement('div');
    const firstRow = document.createElement('div');
    const imgDiv = document.createElement('div');
    const textDiv = document.createElement('div');

    element.classList.add('home-content');
    element.appendChild(firstRow);

    const myImage = new Image();
    myImage.src = '../images/general_restaurant.jpg';
    imgDiv.classList.add('home-content');
    imgDiv.appendChild(myImage);
    firstRow.classList.add('first-row')
    firstRow.appendChild(imgDiv);
    textDiv.classList.add('text-div')
    textDiv.textContent = ". I managed to gthing e on the very right side of the website, outside of the container. (only the footer will be fixed, the header will be scroll-able as well)."
    firstRow.appendChild(textDiv);
    
    
    // element.appendChild(imgDiv);
    
    return element;
}

export default createHomeContent;