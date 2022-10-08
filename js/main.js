const slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [500, 1000],
    connect: true,
    step: 1,
    range: {
        'min': [500],
        'max': [1000]
    }
});

const typeBtnkitchen = document.querySelector('.typeBtnkitchen')
const typeKitchen = document.querySelector('.type-Kitchen')

typeBtnkitchen.addEventListener('click', function(){
    typeKitchen.classList.toggle('open-type')
})

const typeBtnposhad = document.querySelector('.typeBtnposhad')
const typePoshad = document.querySelector('.type-poshad')

typeBtnposhad.addEventListener('click', function(){
    typePoshad.classList.toggle('open-type')
})

const typeBtnColor  = document.querySelector('.typeBtnColor ')
const typeColor = document.querySelector('.type-Color')

typeBtnColor.addEventListener('click', function(){
    typeColor.classList.toggle('open-type')
})

