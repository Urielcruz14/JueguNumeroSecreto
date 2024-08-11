let numeroSecreto = 0;
let intentosRestantes = 3; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Felicidades! Adivinaste el número.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#valorUsuario').setAttribute('disabled', 'true'); // Deshabilitar el campo de entrada
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentosRestantes--;
        if (intentosRestantes === 0) {
            asignarTextoElemento('p', `Se acabaron los intentos. El número secreto era ${numeroSecreto}.`);
            document.querySelector('#valorUsuario').setAttribute('disabled', 'true'); // Deshabilitar el campo de entrada
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentosRestantes = 3; // Reiniciar los intentos restantes
    console.log(numeroSecreto);
    document.querySelector('#valorUsuario').removeAttribute('disabled'); // Habilitar el campo de entrada
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    document.querySelector('#valorUsuario').removeAttribute('disabled'); // Habilitar el campo de entrada
}

condicionesIniciales();
