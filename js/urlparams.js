/*
    LA OBTENCIÓN DE PARÁMETROS DE LA URL DE LA PÁGINA
    SE PUEDE REALIZAR EN CUALQUIER MOMENTO, ESTÁ DESDE
    EL MISMO MOMENTO EN QUE LA PÁGINA SE SOLICITA Y LLEGAN
    LOS PRIMEROS DATOS. 
*/
// Obtener los parámetros de la URL dejando el objeto como constante
// de forma que no va a cambiar en la vida útil de la página y
// queda a disposición de quien lo desee.
const searchParams = new URLSearchParams(window.location.search);

// Función que simplifica el hecho de localizar un parámetro en la URL
// Preguntar primero si tiene el parámetro antes de obtenerlo, si no lo
// encuentra asignar directamente null para indicar que no lo han enviado.
function getUrlParam (nombreParam) {
    return (searchParams.has(nombreParam)) ? searchParams.get(nombreParam) : null;
}



// // Esperamos a que se lean todas las etiquetas de la página --> que
// // se llame a la función "inicio" cuando se realice.
// document.addEventListener("DOMContentLoaded", inicio);

// // Función a la que llama el navegador cuando se leen todas las
// // etiquetas de la página.
// function inicio () {
//     // Obtener el div sobre el que vamos a escribir el resultado
//     let divOutput = document.getElementById("output");
//     if (!divOutput) return;

//     // Utilizar la función getUrlParam para obtener el valor del
//     // parámetro "id" de la URL de la página.
//     let paramId = getUrlParam("id");
//     // Dependiendo de si se ha encontrado el parámetro en la URL o no
//     // escribir un resultado u otro.
//     if (paramId != null) {
//         divOutput.innerHTML = `
//             <p>El valor del parámetro "id" en la URL de la página es: <b>${paramId}</b></p>
//         `;
//     } else {
//         divOutput.innerHTML = `
//             <p>No se ha encontrado el parámetro "id" en la URL de la página</p>
//         `;
//     }
// }