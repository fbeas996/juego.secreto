let numeroSecreto = 0;
let intentos = 0 ;
let listaNumerosSorteados = [];
let numeroMaximo =10

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector( elemento ); //En este bloque tenemos el titulo y la indicacion
    elementoHTML.innerHTML = texto;
    return;
} 

function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value); //Captura el valor del input; cambiate el id en el HTML
   if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento (`p`,`Acertaste en ${intentos} ${(intentos === 1) ? `intento` : `intentos`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
   } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento(`p`,`El numero secreto es menor`)
         } else {
            asignarTextoElemento(`p`,`El numero secreto es mayor`)
        }
        intentos++;
        limpiarCaja()
   }
   return;
}


function limpiarCaja(){
  document.querySelector(`#valorUsuario`).value = ``;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1; //Genera numero secreto
    //Si el numero generado ya esta en la lista, generar otro
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento(`p`,`Ya se sortearon todos los numeros posibles`)
    }else{
        if(listaNumerosSorteados.includes (numeroGenerado)){
            return generarNumeroSecreto();
        }else{
        listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento (`h1`, `Juego del numero secreto`);
    asignarTextoElemento(`p`, `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar msj de intervalo de numeros
    condicionesIniciales();
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    //Deshabilitar boton
    document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`)
}

condicionesIniciales ();
