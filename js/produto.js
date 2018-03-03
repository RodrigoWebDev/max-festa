//Coloca um destaque na cor clicada
let square = document.querySelectorAll(".catalogue .color-squares div");

for (let i = 0; i < square.length; i++) {
    square[i].onclick = function () {
        for (let j = 0; j < square.length; j++) {
            square[j].style.border = "none";
            square[j].style.outline = "none";
        }
        this.style.border = "1px solid white";
        this.style.outline = "1px solid black";
    }
}


let size = document.querySelectorAll(".size div");


for (let i = 0; i < size.length; i++) {
    size[i].onclick = function () {
        for (let j = 0; j < size.length; j++) {
            size[j].style.border = "1px solid rgba(0, 0, 0, .2)";
        }
        this.style.border = "1px solid black";
    }
}

//Coloca um destaque na opção clicada

let featured = document.querySelectorAll(".description h3");

featured[0].onclick = function(){
    this.classList.add("active");
    featured[1].classList.remove("active");
}

featured[1].onclick = function(){
    this.classList.add("active");
    featured[0].classList.remove("active");
}

//Essa seção da interatividade nas abas dos produto
let releases1Arrow = document.querySelectorAll(".releases1 .arrow");
let products1 = document.getElementsByClassName("prod");
let productIndex = 0;


for (i = 0; i < products1.length; i++) {
    products1[i].style.display = "none";
}

products1[0].style.display = "flex";

//Adiciona um evento clique em ambas para mudar de div
releases1Arrow[0].onclick = function () {
    productIndex -= 1;
   
    if (productIndex < 0) {
        productIndex = products1.length - 1;
    }

    for (i = 0; i < products1.length; i++) {
        products1[i].style.display = "none";
    }
    products1[productIndex].style.display = "flex";

}

releases1Arrow[1].onclick = function () {
    productIndex += 1;
   
    if (productIndex > products1.length - 1) {
        productIndex = 0;
    }
    for (i = 0; i < products1.length; i++) {
        products1[i].style.display = "none";
    }
    products1[productIndex].style.display = "flex";

}
