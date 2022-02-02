function appendHeader(){
    const headerContainer = document.createElement('div');
    const logodescriptionDiv = document.createElement('div');
    const headerDiv = document.createElement('div');
    const logoHeaderDiv = document.createElement('div');
    const officialWebDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');

    headerContainer.classList.add('header-container');

    headerDiv.textContent = 'Gotham Pizzeria';
    headerDiv.classList.add('header');
    headerContainer.appendChild(headerDiv);

    const logo = new Image();
    logo.classList.add('gotham-logo');
    logo.src = '../images/gotham-logo.png';
    logoHeaderDiv.appendChild(logo);
    logoHeaderDiv.classList.add('logo-header');
    headerContainer.appendChild(logoHeaderDiv);

    officialWebDiv.textContent = '- Official website -';
    officialWebDiv.classList.add('official-web');
    headerDiv.appendChild(officialWebDiv);

    descriptionDiv.textContent = 'Enjoy the best pizza while nerding out  | ';
    descriptionDiv.classList.add('description');
    headerContainer.appendChild(descriptionDiv);

    return headerContainer;
}

export default appendHeader;