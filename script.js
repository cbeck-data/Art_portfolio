const overlay = document.querySelector('#overlay')
const overlayImg = document.querySelector('#overlay-img')
const images = document.querySelectorAll('.gallery-grid img')

images.forEach(function(img) {
    img.addEventListener('click', function(){
        overlay.style.display = 'block'
        overlayImg.src = img.src
    })
})

overlay.addEventListener('click', function() {
    overlay.style.display = 'none'
})