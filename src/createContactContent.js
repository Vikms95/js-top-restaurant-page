function createContactContent(){
    const wrapper  = document.createElement('div');
    const firstRow = document.createElement('div');
    const image = document.createElement('div');
    const text = document.createElement('div');
    const telephone = document.createElement('div')
    const mail = document.createElement('div')
    const secondRow = document.createElement('div');
    const image2 = document.createElement('div');
    const text2 = document.createElement('div');
    const weekday = document.createElement('div');
    const weekend = document.createElement('div');
    
    wrapper.id ='wrapper';
    wrapper.classList.add('home-content')

    wrapper.appendChild(firstRow);
    firstRow.classList.add('first-row')
    
    const myImage = new Image();
    myImage.src = '../images/general_restaurant.jpg';
    image.classList.add('img-div');
    image.appendChild(myImage);
    firstRow.appendChild(image);
    
    text.appendChild(telephone)
    telephone.classList.add('fa')
    telephone.classList.add('fa-phone')
    text.classList.add('text-div')
    text.classList.add('schedule')
    telephone.textContent = ' +34 420 024 420 024 420'
    
    text.appendChild(mail)
    mail.classList.add('fa')
    mail.classList.add('fa-envelope')
    mail.textContent =  '  gothampizzeriamadeup@gmail.com'
    firstRow.appendChild(text);

    wrapper.appendChild(secondRow);

    secondRow.classList.add('second-row')
    text2.classList.add('text-div')
    text2.classList.add('contact')
    secondRow.appendChild(text2);

    text2.appendChild(weekday);
    weekday.classList.add('fa')
    weekday.classList.add('fa-calendar')
    weekday.textContent = ' Weekdays: 12:00 - 16:00, 19:30 - 23:00'
    text2.appendChild(weekend)
    weekend.classList.add('fa')
    weekend.classList.add('fa-calendar')
    weekend.textContent = ' Weekend: 12:00 - 23:00'

    const myImage2 = new Image();
    myImage2.src = '../images/map.png';
    image2.classList.add('img-div');
    image2.appendChild(myImage2);
    secondRow.appendChild(image2);

    return wrapper;
}

export default createContactContent;