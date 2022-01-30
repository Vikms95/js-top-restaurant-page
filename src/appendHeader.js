function appendHeader(){
    const headerDiv = document.createElement('div');
    headerDiv.textContent = 'Gotham Pizzeria';
    headerDiv.classList.add('header')
    return headerDiv;
}

export default appendHeader;