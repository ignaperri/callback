var contenedor = document.getElementById("contenedor");
var hombreList = ["img/hombre_1.jpg", "img/hombre_2.jpg", "img/hombre_3.jpg", "img/hombre_4.jpg", "img/hombre_5.jpg", "img/hombre_6.jpg"
, "img/hombre_7.jpg", "img/hombre_8.jpg", "img/hombre_9.jpg", "img/hombre_10.jpg", "img/hombre_11.jpg", "img/hombre_12.jpg"
, "img/hombre_13.jpg", "img/hombre_14.jpg", "img/hombre_15.jpg", "img/hombre_16.jpg"];
var aveList = ["img/ave_1.jpg","img/ave_2.jpg","img/ave_3.jpg","img/ave_4.jpg","img/ave_5.jpg","img/ave_6.jpg"];

var cantidadImagenes = hombreList.length;
var indexActual = 1;
var slider = document.createElement("ul");
var anchoLi = 290;
var altoLi = "auto";
var anchoSlider = anchoLi * cantidadImagenes;
var idInterval;
var speedInterval = 100;

slider.style.width = anchoSlider + 'px';
contenedor.style.width = anchoLi + 'px';
contenedor.style.height = altoLi;

//Obtengo las referencias de los botones
var btnMostrarSlider = document.getElementById("botonCargarSlider1");
var btnMostrarSlider2 = document.getElementById("botonCargarSlider2");
var btnIndex = document.getElementById("botonIndex");
var btnAutoPlay = document.getElementById("botonAutoPlay");
var btnAutoStop = document.getElementById("botonAutoStop");
var btnAutoSpeed = document.getElementById("botonAutoSpeed");

//A los botones les asigno un listener
btnMostrarSlider.addEventListener("click", onClickCargarSlider1);
btnMostrarSlider2.addEventListener("click", onClickCargarSlider2);
btnIndex.addEventListener("click", onClickMoveImage);
btnAutoPlay.addEventListener("click", onClickAutoPlay);
btnAutoStop.addEventListener("click", onClickAutoStop);
btnAutoSpeed.addEventListener("click", onClickAutoSpeed);

//Listeners-----
function onClickCargarSlider1(evento){
    cantidadImagenes = hombreList.length;
    anchoSlider = anchoLi * cantidadImagenes; 
    LimpiarSlider();
    CargarImagenesEnSlider(hombreList); 
}
function onClickCargarSlider2(evento){     
    cantidadImagenes = aveList.length;
    anchoSlider = anchoLi * cantidadImagenes; 
    LimpiarSlider();
    CargarImagenesEnSlider(aveList); 
}
function onClickMoveImage(evento){                    
    var nuevoMarginLeft = -indexActual * anchoLi;
    slider.style.marginLeft = nuevoMarginLeft  + "px";
    indexActual++; 
    btnIndex.textContent = "-"  + indexActual + "-";    
    if(indexActual >= cantidadImagenes)
        indexActual = 0;    
}
function onClickAutoPlay(evento){    
    Play();
}
function onClickAutoStop(evento){    
    Stop();
}
function onClickAutoSpeed(evento){
    Stop();
    AumentarVelocidad();    
    Play();
}
//-----------

//Funciones
function LimpiarSlider(){
    slider.innerHTML = "";
    contenedor.innerHTML = "";
}
function CargarImagenesEnSlider(list){
    for(var index=0; index < list.length; index++){
        var img = CrearImagen(0, 70, list[index]);
        AgregarImagen(img);
    }
}
function CrearImagen(ancho, alto, src){
    var img = document.createElement("img");
    img.style.width = '100%';
    img.style.width = 'auto';
    img.src = src;
    //img.width = ancho;
    img.style.height = alto;
    return img;
}
function AgregarImagen(img){
    var li = document.createElement("li");
    li.style.width = anchoLi + 'px';
    li.style.height = altoLi + 'px';
    li.appendChild(img);
    slider.appendChild(li);
    contenedor.appendChild(slider);
}
function Play(){
    idInterval = setInterval(onClickMoveImage, speedInterval); 
}
function Stop(){
    clearInterval(idInterval);
}
function AumentarVelocidad(){
    var segundos = speedInterval/1000;
    btnAutoSpeed.textContent = "Speed" + "  " + segundos + "s";  

    speedInterval -= 100;
    if(speedInterval <= 0)
        speedInterval = 1000;
}