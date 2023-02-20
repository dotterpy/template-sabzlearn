const $ = document

let menuBuger = $.querySelector('#menu-buger')
let closeMenuMobile = $.querySelector('#close-menu-mobile')
let mainMenuController = $.querySelector('#main-menu-controller')
let openMenu = $.querySelectorAll('#open-menu')

function menu(){
    mainMenuController.classList.toggle("back-menu")
    mainMenuController.classList.toggle("forward-menu")
}

menuBuger.addEventListener('click' , menu)

closeMenuMobile.addEventListener('click' , menu)
