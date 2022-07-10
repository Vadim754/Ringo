const headerWindow = document.querySelector('.header__window')
const headerCloseMenu = document.querySelector('.header__window-close')
const headerBurger = document.querySelector('.header__burger')

headerBurger.addEventListener('click', () => {
    headerWindow.classList.remove('none')
    headerWindow.classList.add('header__window-show')
    headerBurger.classList.add('hidden')
    headerCloseMenu.classList.remove('none')
})
