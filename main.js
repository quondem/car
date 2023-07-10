const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')

burger.addEventListener('click', function () {
    menu.classList.toggle('lg:hidden')
    body.classList.toggle('overflow-hidden')
})