function appendFooter(){
    const footer = document.createElement('div');
    const createdFooter = document.createElement('div');
    const githubLink = document.createElement('a');
    
    footer.classList.add('footer');

    footer.appendChild(createdFooter);
    createdFooter.classList.add('created-footer');
    createdFooter.textContent = 'Created by Vikms';

    footer.appendChild(githubLink);
    githubLink.classList.add('github-link');
    githubLink.classList.add('fa');
    githubLink.classList.add('fa-github');
    githubLink.href = 'https://github.com/Vikms95';
    githubLink.textContent = ' - My projects';

    return footer;
}

export default appendFooter;