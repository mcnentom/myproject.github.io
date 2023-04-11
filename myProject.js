const menu=document.querySelector('#mobile__menu');
const links=document.querySelector('.navbar__menu');
menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    links.classList.toggle('active');
});