
// Encontrar los elementos HTML a cambiar
var img = document.getElementById("img");
var titulo = document.getElementById("titulo");
var autor = document.getElementById("autor");
var categoria = document.getElementById("categoria");
var fecha = document.getElementById("fecha");
var localizacion = document.getElementById("localizacion");
var desc = document.getElementById("desc");
var tags = document.getElementById("tags");

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
URLSearchParams
    // BUSCAR en datos la obra que corresponde a ese ID
    
    // Cambiar el contenido de los elementos HTML con los datos de la obra
    img.src = obra.Photo;
    titulo.innerText = obra.Title;
    autor.innerText = obra.Author;
    categoria.innerText = obra.Category;
    fecha.innerText = obra.Date;
    localizacion.innerText = obra.Location;
    desc.innerText = obra.Description;
    tags.innerText = obra.Tags;
}