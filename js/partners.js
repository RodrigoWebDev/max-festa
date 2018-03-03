//Pega as setas da area de parceiros
let arrow = document.getElementsByClassName("arrow");
//Pega as divs
let div = document.getElementsByClassName("partners-div");
//Posição(DIV) atual
let index = 0;

//limpa os campos das divs e deixa so a primeira
for (i = 0; i < div.length; i++) {
    div[i].style.display = "none";
}

div[0].style.display = "flex";

//Adiciona um evento em ambas para mudar de div
arrow[0].onclick = function () {
    index -= 1;

    if (index < 0) {
        index = div.length - 1;
    }


    for (i = 0; i < div.length; i++) {
        div[i].style.display = "none";
    }
    div[index].style.display = "flex";

}

arrow[1].onclick = function () {
    index += 1;

    if (index > div.length - 1) {
        index = 0;
    }




    for (i = 0; i < div.length; i++) {
        div[i].style.display = "none";
    }
    div[index].style.display = "flex";


}