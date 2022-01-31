function appendHeader(){
    const headerContainer = document.createElement('div');
    const headerDiv = document.createElement('div');
    const logoHeaderDiv = document.createElement('div');
    const officialWebDiv = document.createElement('div');
    const githubDiv = document.createElement('div');

    headerContainer.classList.add('header-container');

    headerDiv.textContent = 'Gotham Pizza';
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

    githubDiv.textContent = 'Created by Vikms';
    githubDiv.classList.add('github-link');
    headerContainer.appendChild(githubDiv);

    return headerContainer;
}

export default appendHeader;