let pages = []

const worker = new Worker('./my-worker.js')

worker.addEventListener('message', logMessageFromWorker)

function logMessageFromWorker(message){
    console.log(message.data);
}

function activateWorker(){
    worker.postMessage('yoyoschiavo')
}

function loadPages(){
    fetch('./pages.json')
        .then(response => response.json())
        .then(result => displayPages(result))
}

function displayPages(loadPages){
    pages = loadPages
    const navMenu = document.getElementById('nav-menu')
    for(const page of pages){
        const a = document.createElement('a')
        const text = document.createTextNode(page.name + ' ')
        const link = '/#/' + page.id
        a.append(text)
        a.href = link
        navMenu.appendChild(a)
    }

    changePage(window.location.hash)
}

function changePage(hash){
    let id = hash.replace('#/','')
    if(id === '') id = 'home' 
    const page = pages.find(e => e.id === id)
    const container = document.getElementById('page-container')
    container.innerHTML = page.html
}

window.addEventListener('hashchange', () => changePage(window.location.hash))

loadPages()