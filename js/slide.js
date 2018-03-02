//Defini um valor inicial para o index do slide
let slideIndex = 1;
//Pega os botoes de passar e voltar o slide
let next = document.getElementsByClassName("next")[0];
let prev = document.getElementsByClassName("prev")[0];
showSlides(slideIndex);

//Deixa o Slide automático
window.setInterval(function () {
    plusSlides(1);
}, 2300);

//Passa e volta o slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Define o slide atual
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//Mostra o slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
