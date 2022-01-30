function appendButtonMenu(){ 
    const tabsDiv = document.createElement('div');
    const tabHome = document.createElement('button');
    const tabMenu = document.createElement('button');
    const tabContact = document.createElement('button');

    tabHome.textContent = 'Home';
    tabMenu.textContent = 'Menu';
    tabContact.textContent = 'Contact';

    tabsDiv.classList.add('tab-menu');
    tabHome.classList.add('tab-home-button');
    tabMenu.classList.add('tab-menu-button');
    tabContact.classList.add('tab-contact-button');

    tabsDiv.appendChild(tabHome);
    tabsDiv.appendChild(tabMenu);
    tabsDiv.appendChild(tabContact);

    return tabsDiv;
}

export default appendButtonMenu;