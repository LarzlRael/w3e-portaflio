const items = document.querySelectorAll('nav a');
console.log(items);

items.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.w3-bar-item.w3-button.w3-padding-large.w3-black').classList.remove('w3-black');
        item.classList.add('w3-black');
    })
})