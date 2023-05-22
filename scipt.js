function changeColor(get){
    var fond = document.querySelector(".couleur-fond");
    var selectColor = get.value;
    fond.style.background = selectColor;
}