$botonJugar = document.querySelector("#boton-jugar");
$tiempo = document.querySelector('#time');


const imagenes = {
    "carta-1": "images/Bard.png",
    "carta-2": "images/Ashe.png",
    "carta-3": "images/Kled.png",
    "carta-4": "images/Rakan.png",
    "carta-5": "images/Xayah.png",
    "carta-6": "images/Shaco.png",
    "carta-7": "images/Bard.png",
    "carta-8": "images/Ashe.png",
    "carta-9": "images/Kled.png",
    "carta-10": "images/Rakan.png",
    "carta-11": "images/Xayah.png",
    "carta-12": "images/Shaco.png"
};

$botonJugar.onclick = function(){
    comienzoJuego();
    startTimer();
};

function comienzoJuego(){
    mezclarCartas();
    //correrTiempo();
    desbloquearInputUsuario();
}

//Funcion usada para Mezclar las cartas
function mezclarCartas(){
let numeros = [1,2,3,4,5,6,7,8,9,10,11,12];
numeros = numeros.sort(function() {return Math.random() - 0.5});
let $cartas = document.querySelectorAll(".carta img");
$cartas.forEach(function($carta, index){
    $carta.id = "carta-" + numeros[index];
});
}


let cartasTocadas = [];
function voltearCarta(e){
    
    let $cartaTocada = e.target;
    const idCarta = $cartaTocada.id
    console.log(imagenes[idCarta]);
    $cartaTocada.src = imagenes[idCarta];
    cartasTocadas.push($cartaTocada);
    

    if(cartasTocadas.length === 2){
        bloquearInputUsuario();
        cartaA = cartasTocadas[0];
        cartaB = cartasTocadas[1];
        if(cartaA.src != cartaB.src){
            setTimeout(function(){
                cartasTocadas[0].src = "images/lol.png";
                cartasTocadas[1].src = "images/lol.png";
                cartasTocadas = [];
                desbloquearInputUsuario();
            }, 500);
            
        } else {
            desbloquearInputUsuario();
            cartasTocadas = [];
        }
        
        
    }
    

}

function bloquearInputUsuario() {
    document.querySelectorAll('.back img').forEach(function($carta) {
    $carta.onclick = function() {

          };
     });
   }

   function desbloquearInputUsuario() {     
       document.querySelectorAll('.back img').forEach(function($carta) {
       $carta.onclick = voltearCarta;
    });
    }

function startTimer() {
    let timer = 0;
    setInterval(function () {
        timer++;
        $tiempo.innerHTML = timer;
    }, 1000);
}
    
    


function comprobarIguales(){

}