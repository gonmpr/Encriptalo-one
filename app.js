/*

---Codigo para encriptar y desencriptar texto---


Las "llaves" de encriptacion son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos usados en el diseño:

-. Debe funcionar solo con letras minusculas

-. No deben ser utilizados letras con acentos ni caracteres especiales

-. Debe ser posible convertir una palabra para la version encriptada tambien devolver una palabra encriptada para su version original.

*/








// Definición de letras y sus reemplazos para encriptar y desencriptar
const letras = ['e', 'i', 'a', 'o', 'u'];
const reemplazos = ['enter', 'imes', 'ai', 'ober', 'ufat'];

//







// Función que convierte un texto normal en texto encriptado
function encriptarTexto(texto) {
  let resultadoEncriptado = '';
  
  // Recorre cada carácter del texto
  for (let i = 0; i < texto.length; i++) {
    const caracterActual = texto[i];
    let esReemplazado = false;
    
    // Busca si el carácter tiene un reemplazo definido
    for (let j = 0; j < letras.length; j++) {
      if (caracterActual === letras[j]) {
        resultadoEncriptado += reemplazos[j];
        esReemplazado = true;
        break;
      }
    }
    
    // Si no se encontró un reemplazo, agrega el carácter original
    if (!esReemplazado) {
      resultadoEncriptado += caracterActual;
    }
  }
  
  return resultadoEncriptado;
}












// Función que convierte un texto encriptado de vuelta a texto normal
function desencriptar_texto(texto_encriptado) {
  let resultadoOriginal = '';
  let indice = 0;
  
  // Recorre el texto encriptado
  while (indice < texto_encriptado.length) {
    let esReemplazado = false;
    
    // Verifica si el texto encriptado comienza con algún reemplazo conocido
    for (let j = 0; j < reemplazos.length; j++) {
      const reemplazoActual = reemplazos[j];
      
      if (texto_encriptado.substring(indice, indice + reemplazoActual.length) === reemplazoActual) {
        resultadoOriginal += letras[j];
        indice += reemplazoActual.length;
        esReemplazado = true;
        break;
      }
    }
    
    // Si no se encontró un reemplazo, agrega el carácter tal cual
    if (!esReemplazado) {
      resultadoOriginal += texto_encriptado[indice];
      indice++;
    }
  }
  
  return resultadoOriginal;
}



// Funcion para copiar el texto una vez encriptado/desencriptado
function copiar_texto(){

    let salida = document.getElementsByClassName("texto__de__salida")[0];
    let contenidoTexto = salida.innerText;
    
    navigator.clipboard.writeText(contenidoTexto);
};



// Funcion para mostrar y esconder elementos
function mostrar_ocultar_item() {
  let salida = document.getElementsByClassName("texto__de__salida")[0];
  let pista = document.getElementsByClassName("pista__de__salida")[0];

  if (salida.textContent.trim().length > 0) {

    document.getElementsByClassName("boton__copiar")[0].style.display = "block";
    document.getElementsByClassName("imagen__de__salida")[0].style.display = "none";
    document.getElementsByClassName("pista__de__salida")[0].style.display = "none";
  } else {

    document.getElementsByClassName("boton__copiar")[0].style.display = "none";
    document.getElementsByClassName("imagen__de__salida")[0].style.display = "block";
    document.getElementsByClassName("pista__de__salida")[0].style.display = "block";
  }
}


// Funcion que gestiona la obtencion del texto y la salida de la encriptacion/desencriptacion
function texto_html(funcion){
  let salida = document.getElementsByClassName("texto__de__salida")[0];
  let caja_de_texto = document.getElementsByClassName("area__de__texto")[0].value;

  if (funcion === 'encriptar') {
    salida.innerHTML = encriptarTexto(caja_de_texto);
  } else if (funcion === 'desencriptar') {
    salida.innerHTML = desencriptar_texto(caja_de_texto);
  }

  // Llamar a mostrar_ocultar_item después de actualizar el contenido
  mostrar_ocultar_item();
}








