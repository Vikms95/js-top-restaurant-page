function createHomeContent(){
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
    textDiv.textContent = "Located on Passeig Fabra i Puig at Barcelona, this little magic space has all prepared to deligth those with a liking on nerd-culture, be it cinema from the 80's and 90's, TV shows, videogames or other media that has marked our early lifes to so many of us.";
    firstRow.appendChild(textDiv);

    element.appendChild(secondRow);
    secondRow.classList.add('second-row')

    textDiv2.classList.add('text-div')
    textDiv2.textContent = "Restaurante decorado de forma fantástica, transmite la pasión por el cine (especialmente de ciencia ficción y aventuras ochentero y noventero), las series, el mundo del cómic y últimamente también por la NBA. ";
    secondRow.appendChild(textDiv2);
    const myImage2 = new Image();
    myImage2.src = '../images/general2_restaurant.jpg';
    imgDiv2.classList.add('img-div');
    imgDiv2.appendChild(myImage2);
    
    secondRow.appendChild(imgDiv2);


    return wrapper;
}

export default createHomeContent;