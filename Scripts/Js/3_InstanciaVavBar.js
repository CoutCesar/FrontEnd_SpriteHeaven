// Obtén una referencia al elemento div con el ID "InstanciaEncabezado"
var divInstanciaEncabezado = document.getElementById("InstanciaNavBar");

// Ruta del archivo HTML
var rutaArchivoHTML = "/Scripts/html/1_NavBar.html";

// Utiliza la función fetch para obtener el contenido del archivo HTML
fetch(rutaArchivoHTML)
  .then(function(response) {
    return response.text();
  })
  .then(function(htmlContent) {
    // Asigna el contenido del archivo HTML al div
    divInstanciaEncabezado.innerHTML = htmlContent;
  })
  .catch(function(error) {
    console.error("Error al cargar el archivo HTML: " + error);
  });
