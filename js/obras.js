
// Encontrar los elementos HTML a cambiar
const container = document.getElementById('obrasinfo');
var datos = null;

fetch("/json/obra.json")
  .then(response => response.json())
  .then(data => {
    datos = data;
    init();
  })
  .catch(error => console.error('Error:', error));

// function init (){
//     datos.forEach(item => {
//       container.innerHTML += `
//         <div class="Title">${item.Title}</div>
//       `;
//     });
// }

function init () {
    // obtener el id que viene en la URL
    // BUSCAR en datos la obra que corresponde a ese ID
    search
    // Cambiar el contenido de los elementos HTML con los datos de la obra
}