
var tacoButtonElement = document.getElementById('taco-button');
var dogButtonElement = document.getElementById('dog-button');
var boomButtonElement = document.getElementById('boom-button');
var tacoSound = new Audio('tacobell.mp3');
var dogSound = new Audio('dog.mp3');
var boomSound = new Audio('boom.mp3');

tacoButtonElement.addEventListener('click', function () {
    tacoSound.play();
}
)

dogButtonElement.addEventListener('click', function () {
    dogSound.play();
}
)

boomButtonElement.addEventListener('click', function () {
    boomSound.play();
}
)