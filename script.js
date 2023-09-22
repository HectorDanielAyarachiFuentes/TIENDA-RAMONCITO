// BARRA DESPLEGABLE

function toggleMenu() {
    var navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('show');
}


// DARK MODE
var modoBoton = document.getElementById('modoBoton');
var ventanaEmergente = document.getElementById("miVentanaEmergente");

// Agrega un listener al botón para cambiar el modo
modoBoton.addEventListener('click', function() {
    // Alternar la clase "dark-mode" en el elemento body
    document.body.classList.toggle('dark-mode');
    
    // Alternar la clase "dark-mode" en la ventana emergente
    ventanaEmergente.classList.toggle("dark-mode");
});


/** VENTANA EMERGENTE */
// Obtén el elemento de la ventana emergente
const miVentanaEmergente = document.getElementById('miVentanaEmergente');

// Función para mostrar la ventana emergente
function mostrarVentanaEmergente() {
    miVentanaEmergente.style.display = 'block';
}

// Mostrar la ventana emergente automáticamente después de cinco segundos
setTimeout(mostrarVentanaEmergente, 5000);

// Obtén el elemento del botón para cerrar la ventana emergente
const cerrarPopup = document.getElementById('cerrarPopup');

// Función para cerrar la ventana emergente
function cerrarVentanaEmergente() {
    miVentanaEmergente.style.display = 'none';
    miVentanaEmergente.scrollTop = 0;
}

// Agrega un evento de clic al botón para cerrar la ventana emergente
cerrarPopup.addEventListener('click', cerrarVentanaEmergente);

////****** */
// script.js



  function goBackToIndex() {
    window.location.href = 'index.html';
  }


/*//*/
// Función para cambiar el modo oscuro
function cambiarModo() {
  const modoBoton = document.getElementById('modoBoton');
  const body = document.body;

  if (body.classList.contains('modo-oscuro')) {
    // Cambia a modo claro
    body.classList.remove('modo-oscuro');
    modoBoton.innerText = 'Modo claro';
  } else {
    // Cambia a modo oscuro
    body.classList.add('modo-oscuro');
    modoBoton.innerText = 'Modo oscuro';
  }
}

  function goBackToIndex() {
    window.location.href = 'index.html';
  }


  function realizarCompra() {
    const cantidadInput = prompt('Ingrese la cantidad a comprar:');
    const cantidad = parseInt(cantidadInput);
    const precio = parseFloat(document.getElementById('precio').textContent);
    const multiplicador = 1.5; // Puedes ajustar el valor del multiplicador según tus necesidades
    const total = cantidad * precio * multiplicador;
    alert(`Has comprado ${cantidad} unidades. El total a pagar es: US$ ${total.toFixed(2)}. ¡Gracias por tu compra!`);
    enviarProducto(); // Llama a la función enviarProducto() para enviar el producto
  }

  function enviarProducto() {
    // Aquí puedes agregar el código para enviar el producto, como realizar una solicitud a un servidor o guardar los datos en una base de datos
    alert('Producto enviado exitosamente.');
  }


