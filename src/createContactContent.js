function createContactContent(){
    const wrapper  = document.createElement('div');
    const element = document.createElement('div');
    const firstRow = document.createElement('div');
    const imgDiv = document.createElement('div');
    const textDiv = document.createElement('div');
    const secondRow = document.createElement('div');
    const imgDiv2 = document.createElement('div');
    const textDiv2 = document.createElement('div');

    wrapper.id ='wrapper';
    wrapper.appendChild(element);
    element.classList.add('home-content');
    element.appendChild(firstRow);
    
    firstRow.classList.add('first-row')
    const myImage = new Image();
    myImage.src = '../images/general_restaurant.jpg';
    imgDiv.classList.add('img-div');
    imgDiv.appendChild(myImage);
    firstRow.appendChild(imgDiv);
    textDiv.classList.add('text-div')
    textDiv.textContent = "THIS IS CONTACT DIV";
    firstRow.appendChild(textDiv);

    element.appendChild(secondRow);
    secondRow.classList.add('second-row')

    textDiv2.classList.add('text-div')
    textDiv2.textContent = "THIS IS CONTACT DIV";
    secondRow.appendChild(textDiv2);
    const myImage2 = new Image();
    myImage2.src = '../images/general_restaurant.jpg';
    imgDiv2.classList.add('img-div');
    imgDiv2.appendChild(myImage2);
    
    secondRow.appendChild(imgDiv2);


    return wrapper;
}

export default createContactContent;