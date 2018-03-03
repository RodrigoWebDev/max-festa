let releases2Arrow = document.querySelectorAll(".releases2 .arrow");
let products2 = document.getElementsByClassName("products2");
let product2Index = 0;

for (i = 0; i < products2.length; i++) {
    products2[i].style.display = "none";
}

products2[0].style.display = "flex";

releases2Arrow[0].onclick = function () {
    product2Index -= 1;

    if (product2Index < 0) {
        product2Index = products2.length - 1;
    }

    for (i = 0; i < products2.length; i++) {
        products2[i].style.display = "none";
    }
    products2[product2Index].style.display = "flex";
}

releases2Arrow[1].onclick = function () {
    product2Index += 1;
    if (product2Index > products2.length - 1) {
        product2Index = 0;
    }

    for (i = 0; i < products2.length; i++) {
        products2[i].style.display = "none";
    }
    products2[product2Index].style.display = "flex";

}
