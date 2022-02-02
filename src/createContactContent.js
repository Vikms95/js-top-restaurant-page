function createContactContent(){
    const wrapper  = document.createElement('div');
    const firstRow = document.createElement('div');
    const imgDiv = document.createElement('div');
    const textDiv = document.createElement('div');
    const telephoneDiv = document.createElement('div')
    const mailDiv = document.createElement('div')
    const secondRow = document.createElement('div');
    const imgDiv2 = document.createElement('div');
    const textDiv2 = document.createElement('div');
    const weekDay = document.createElement('div');
    const weekend = document.createElement('div');
    
    wrapper.id ='wrapper';
    wrapper.classList.add('home-content')
    wrapper.appendChild(firstRow);
    
    firstRow.classList.add('first-row')
    const myImage = new Image();
    myImage.src = '../images/general_restaurant.jpg';
    imgDiv.classList.add('img-div');
    imgDiv.appendChild(myImage);
    firstRow.appendChild(imgDiv);
    textDiv.classList.add('text-div')
    textDiv.appendChild(telephoneDiv)
    telephoneDiv.textContent = ' 5465456456464'
    textDiv.appendChild(mailDiv)
    mailDiv.textContent =  'gothampizzeria@gmail.com'
    firstRow.appendChild(textDiv);

    wrapper.appendChild(secondRow);
    secondRow.classList.add('second-row')

    textDiv2.classList.add('text-div')
    secondRow.appendChild(textDiv2);
    textDiv2.appendChild(weekDay);
    weekDay.textContent = 'Weekdays: 12:00 - 16:00, 19:30 - 23:00'
    textDiv2.appendChild(weekend)
    weekend.textContent = 'Weekend: 12:00 - 23:00'
    const myImage2 = new Image();
    myImage2.src = '../images/general_restaurant.jpg';
    imgDiv2.classList.add('img-div');
    imgDiv2.appendChild(myImage2);
    
    secondRow.appendChild(imgDiv2);


    return wrapper;
}

export default createContactContent;