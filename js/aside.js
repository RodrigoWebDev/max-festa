//Pega as div do accordion
let accordion = document.getElementsByClassName("accordion");

//Percorre todos os elementos dessa Nodelist e deixa como display os quatro primeiros, como no PSD
for (let i = 0; i <= 3; i++) {
    accordion[i].nextElementSibling.classList.add("display");
}
//Percorre todos os elementos dessa Nodelist e adiciona um evento click que faz com que a ul respectiva apareça ou desapareça
for (let i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function () {
        let ul = this.nextElementSibling;
        ul.classList.toggle("display");
    }
}