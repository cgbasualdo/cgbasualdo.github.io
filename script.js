///////CONDICIONES PARA LA LOGICA//////////

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


 const textArea = document.querySelector(".text-area");
 const mensaje = document.querySelector(".mensaje");

//////////////UTILIDADES/////////////////

 textArea.addEventListener('focus', function(){ //El "FOCUS" detecta cuando esta la barra para que el usuario ingrese texto. Luego la funcion limpia la etiqueta "placeholder"
    textArea.placeholder = "" }); 
mensaje.addEventListener('blur', function(){  //El "BLUR" detecta la funcion contraria al "FOCUS", cuando la barra de ingreso de datos no esta. Luego la funcion le vuelve a dar valor al "placeholder"
    mensaje.placeholder = "Ingrese su mensaje" }); 


//////////////////BOTONES//////////////////

//////BOTON ENCRIPTAR///////
const botonEncriptar = document.querySelector(".btn-encriptar");
botonEncriptar.addEventListener('click', function btnencriptar(){
    let hayMayuscula = false;
    const acentos = /[áéíóú]/;
    let sinEspacio = textArea.value.replaceAll(' ', 'k'); //remplaza los caracteres vacios de una cadena por la letra "k".
    for (let i = 0; i < sinEspacio.length; i++) {
        if (sinEspacio[i] == sinEspacio[i].toUpperCase()) {
            hayMayuscula = true;
            break;
        } else if (acentos.test(sinEspacio.value)) {
            hayMayuscula = true;
            break;
        } 
    }
    if (hayMayuscula) {
        alert('No se permiten mayusculas ni acentos');
        textArea.value = "";
    } else {
    const textoEncriptado = encriptar (textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage="none";
    }
})

///////BOTON DESENCRIPTAR///////
const botonDesencriptar = document.querySelector(".btn-desencriptar");
botonDesencriptar.addEventListener('click', function btndesencriptar(){
    const textoDesencriptado = desencriptar (textArea.value);
    textArea.value = textoDesencriptado; 
}
);
///////BOTON COPIAR////////
const btnCopiar = document.querySelector(".btn-copiar")
btnCopiar.addEventListener('click', function(){
    textArea.value = mensaje.value;
    mensaje.value = "";
    mensaje.style.backgroundImage = "url('Imagenes/Muñeco.png')";
}
);

//////////////FUNCIONES PRINCIPALES////////////////////

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a", "ai"],["o", "ober"],["u", "ufat"] ];
     stringEncriptado = stringEncriptado.toLowerCase();
    for(let i = 0;i<matrizCodigo.length;i++){
       if(stringEncriptado.includes(matrizCodigo[i][0])){
        stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
       }
    }
    return stringEncriptado;
}


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a", "ai"],["o", "ober"],["u", "ufat"] ];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for(let i = 0;i<matrizCodigo.length;i++){
       if(stringDesencriptado.includes(matrizCodigo[i][1])){
        stringDesencriptado= stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
       }
    }
    return stringDesencriptado;
}


