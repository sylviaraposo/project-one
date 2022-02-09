// mobile menu capability
const dropDownEl = document.querySelector('.drop-down')
const navMenuEl = document.querySelector('.nav-menu')

dropDownEl.addEventListener('click', function() {

    if (navMenuEl.style.display == 'block') {
        navMenuEl.classList.add('animate__fadeOutUp')
    } else {
        navMenuEl.style.display = 'block'
    } 
})



// I know this doesn't work :( 

imageEl = document.getElementsByClassName('image')
nextButton = document.querySelector('.next')
prevButton = document.querySelector('.prev')

// console.log(buttonEl)

let currentImage = 0;
let images = [];

let results = document.querySelector('.center-img');
const defaultResult = document.querySelector('.first-img');
console.log(imageEl)

// for (let i = 0; i < imageEl.length; i++) {
nextButton.addEventListener('click', function () {
    if(currentImage < imageEl.length - 2){
        results.innerHTML = '';

        currentImage++;
        nextButton.style.opacity = '1'

        let imageResult = imageEl[currentImage].outerHTML

        console.log(currentImage)
        results.innerHTML = imageResult;

        results.style.display = 'block';
        defaultResult.style.display = 'none';
        console.log(imageEl.length)
    }

});


// Previous Button
prevButton.addEventListener('click', function () {
    console.log(currentImage)
    if(currentImage > 0){
        prevButton.style.opacity = '1'
        results.innerHTML = '';
        // if(currentImage >= 1) {
            currentImage--; 

            // console.log(imageEl[currentImage])
            console.log(currentImage)
            // console.log(imageEl)
            let imageResult = imageEl[currentImage].outerHTML

            // console.log(currentImage)
            results.innerHTML = imageResult;

            results.style.display = 'block';

            
    }
});