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
        // Obtener referencias a elementos HTML
        var audioPlayer = document.getElementById("audio-player");
        var ramoncito = document.getElementById("ramoncito");
        // Agregar un controlador de eventos para el clic en el elemento <span>
        ramoncito.addEventListener("click", function() {
            // Si el audio está pausado, reproducirlo; de lo contrario, pausarlo
            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        });
// Almacena los datos del JSON en localStorage
localStorage.setItem("pokemonDatos", JSON.stringify(data));