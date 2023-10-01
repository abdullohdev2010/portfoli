const header = document.querySelector('header');
const row = document.querySelectorAll('.row')
window.addEventListener ('scroll', function() {
    header.classList.toggle ('sticky', window.scrollY > 120)
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('action')
}
window.onscroll = () =>{
    menu.classList.remove('bx-x')
    navlist.classList.remove('action')
}

