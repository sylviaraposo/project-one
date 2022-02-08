// mobile menu capability
const dropDownEl = document.querySelector('.drop-down')
const navMenuEl = document.querySelector('.nav-menu')

console.log(dropDownEl)
dropDownEl.addEventListener('click', function() {

    if (navMenuEl.style.display == 'block') {
        navMenuEl.classList.add('animate__fadeOutUp')
    } else {
        navMenuEl.style.display = 'block'
    } 
})




