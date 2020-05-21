const items = document.querySelectorAll('nav a');

items.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.w3-bar-item.w3-button.w3-padding-large.w3-black').classList.remove('w3-black');
        item.classList.add('w3-black');
    })
})

let mainNavLinks = document.querySelectorAll("nav a");


let mainSections = document.querySelectorAll("main section");


window.addEventListener("scroll", event => {
    console.log('scroll')    
    
});

