document.addEventListener("DOMContentLoaded", function() 
{
    var BtnRegistrar = document.getElementById("Registrar");
    var BtnCancelar = document.getElementById("Cancelar");
    
    var BtnComprar = document.getElementById("Comprar");

    var BtnCarrito = document.getElementById("Carrito");
    
    var Modal = document.getElementById("ModalRegistro");
    
    BtnRegistrar.addEventListener("click", Validardatos);
    BtnCancelar.addEventListener("click", CerrarModal);
    
    BtnComprar.addEventListener("click", AbrirModal);
    BtnCarrito.addEventListener("click", AbrirModal);
    
    function AbrirModal()
    {
        Modal.style.display = "block";
        console.log("Modal Abierto");
    }
    
    function CerrarModal()
    {
        Modal.style.display = "none";
        console.log("Modal Cerrado");
    }
    
    function Validardatos() 
    {
        var Nombre = document.getElementById("Nombre").value;
        var Correo = document.getElementById("Correo").value;
        var Contrasena = document.getElementById("Contrasena").value;
        var Contrasena2 = document.getElementById("Contrasena2").value;
        
        if (ValidarCorreo(Correo)) 
        {
            if (ValidarContraseñas(Contrasena, Contrasena2)) 
            {
                RegistroExitoso();
            }
            
            else
            {
                var ErrorContrasena = document.getElementById("Error");
                ErrorContrasena.textContent = "Las contraseñas no coinciden";
            } 
        }
        else 
        {
            var ErrorContrasena = document.getElementById("Error");
            ErrorContrasena.textContent = "El correo no es valido";
        }
    }

    function ValidarCorreo(Correo)
    {
        // Expresión regular para validar un correo electrónico simple
        var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        // Usar la expresión regular para validar el correo
        if (regex.test(Correo)) 
        {
            return true; // El correo es válido
        } 
        
        else 
        {
            return false; // El correo no es válido
        }
    }

    function ValidarContraseñas(Contrasena, Contrasena2)
    {
        var validacion = false;
        if (Contrasena == Contrasena2) validacion = true;
        else validacion = false;

        return validacion;
    }

    function RegistroExitoso() 
    {
        var Nombre = document.getElementById("Nombre");
        var Correo = document.getElementById("Correo");
        var Contrasena = document.getElementById("Contrasena");
        var Contrasena2 = document.getElementById("Contrasena2");
    
        // Vaciar los campos
        Nombre.value = "";
        Correo.value = "";
        Contrasena.value = "";
        Contrasena2.value = "";
        Contrasena.textContent = "";

        CerrarModal();
        DescargarArchivo()
    }

    function DescargarArchivo() 
    {
        var Archivo = BtnComprar.getAttribute("data-product-id");
        console.log(Archivo)
        Descargar(Archivo);
    }    
    
    function Descargar(Archivo)
    {
        var urlImagen = "";
        switch(Archivo)
        {
            case "1":
                console.log("Archivo1");
                urlImagen = "/Images/Sprite1_PlaceHorder.png";
                break;
            
            case "2":
                console.log("Archivo2");
                urlImagen = "/Images/Asset1_PlaceHolder.png";
                break;
                
            case "3":
                console.log("Archivo3");
                urlImagen = "/Images/Template1_PlaceHolder.png";
                break;

            default: console.log("Error switch");
        }
        
        // Realizar una solicitud para cargar la imagen
        fetch(urlImagen)
        .then(response => response.blob())
        .then(blob => 
        {
            // Crear una URL para el Blob
            var url = URL.createObjectURL(blob);

            // Crear un elemento de enlace (hipervínculo) para la descarga
            var enlace = document.createElement('a');
            enlace.href = url;

            // Definir el nombre del archivo que se descargará (puedes personalizar el nombre)
            enlace.download = 'Descarga.png';

            // Simular un clic en el enlace para iniciar la descarga
            enlace.click();

            // Liberar los recursos al eliminar la URL creada
            URL.revokeObjectURL(url);
        })
        .catch(error => 
        {
            console.error('Error al descargar la imagen:', error);
        });
    }
});