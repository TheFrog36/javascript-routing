changePage(window.location.hash)
window.addEventListener('hashchange', () => changePage(window.location.hash))

function changePage(hash){
    switch(hash){
        case '#/about':
            displayPage('about')
            break;
        case '#/gallery':
            displayPage('gallery')
            break;
        case '#/contacts':
            displayPage('contacts')
            break;
        default:
            displayPage('home')
    }
}

function displayPage(pageId){
    const pageContainer = document.getElementById('page-container')
    const arrayOfChildren = [...pageContainer.children]
    for(const child of arrayOfChildren){
        child.style.display = 'none'
    }
    const selectedPage = document.getElementById(pageId)
    selectedPage.style.display = 'block'
}