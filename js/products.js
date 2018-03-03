//Essa seção da interatividade nas abas dos produto
let releases1Arrow = document.querySelectorAll(".releases1 .arrow");
let products1 = document.getElementsByClassName("products1");
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