document.addEventListener("DOMContentLoaded", function () {
    // Obtén el ID del Pokémon desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    // Obtén los datos de Pokémon desde el localStorage
    const pokemonData = JSON.parse(localStorage.getItem("pokemonDatos"));
    // Busca el Pokémon por su ID
    const selectedPokemon = pokemonData.find((pokemon) => pokemon.id == id);
    if (selectedPokemon) {
        // Crea el contenido HTML con los detalles del Pokémon
        const detalleHtml = `
        <header class="header">
        <h1>${selectedPokemon.header}</h1>
        <p>Solo disponibles los mejores Pokémon:</p>
    </header>
    <div class="pokemon-card">
        <h2>${selectedPokemon.nombre}</h2>
        <img src="${selectedPokemon.imagen}" alt="${selectedPokemon.nombre} Image">
        <p><strong>Descripción:</strong> ${selectedPokemon.descripcion}</p>
        <p><strong>Tipo:</strong> ${selectedPokemon.caracteristicas.tipo}</p>
        <p><strong>Habilidad:</strong> ${selectedPokemon.caracteristicas.habilidad}</p>
        <p><strong>Poder:</strong> ${selectedPokemon.caracteristicas.poder}</p>
        <p><strong>Votación:</strong> ${selectedPokemon.votacion}</p>
        <p id="precioPokemon"><strong>Precio:</strong> $${selectedPokemon.precio}</p>
        <button onclick="goToIndex()" class="volver-button">Volver Atrás</button>
    </div>
        `;
        // Agrega el contenido al contenedor pokemonDetails
        const pokemonDetails = document.getElementById("pokemon-details");
        pokemonDetails.innerHTML = detalleHtml;
    } else {
        // Si no se encuentra el Pokémon, muestra un mensaje de error
        const pokemonDetails = document.getElementById("pokemon-details");
        pokemonDetails.innerHTML = "<p>Pokémon no encontrado.</p>";
    }
});
function goToIndex() {
    window.location.href = "index-picachu.html";
}
///// FUNCION COMPRA
let cerrarVentana = false;
        
        function realizarCompra() {
            const multiplicador = parseFloat(document.getElementById('multiplicador').value);
            const precioTexto = document.getElementById('precioPokemon').textContent;
        
            // Extraer el precio numérico del texto (por ejemplo, "$50.00" -> 50.00)
            const precio = parseFloat(precioTexto.match(/\d+\.\d+/));
        
            if (isNaN(precio) || isNaN(multiplicador) || multiplicador < 1) {
                alert("Por favor, ingrese valores válidos.");
                return;
            }
        
            const resultado = precio * multiplicador;
        
            // Dar formato al resultado con puntos cada tres dígitos
            const resultadoFormateado = resultado.toLocaleString();
        
            // Mostrar el resultado formateado y solicitar confirmación
            const confirmacion = window.confirm(`El precio total es: US$ ${resultadoFormateado}. ¿Estás seguro de realizar la compra?`);
        
            if (confirmacion) {
                // Cambiar el texto del botón
                const botonCompra = document.querySelector('.compra-button');
                botonCompra.textContent = 'Enviar Producto';
        
                // Mostrar la dirección inventada
                const direccion = '123 Calle Ficticia, Ciudad Imaginaria';
                window.alert(`Estás comprando un Pokémon. Tu pedido está siendo enviado. ¡Gracias por comprar nuestros Pokémon clonados!`);
            } else {
                // Cancelar la compra y marcar para cerrar la ventana de alerta
                cerrarVentana = true;
                window.alert('Compra cancelada. NO ERES UN DIGNO MAESTRO POKEMON ADIOS!!!');
            }
        }
        
        // Obtener el botón de compra
        const botonCompra = document.querySelector('.compra-button');
        
        // Agregar un evento de clic al botón
        botonCompra.addEventListener('click', function() {
            // Cerrar la ventana de alerta si se marcó para cerrar
            if (cerrarVentana) {
                window.close();
            } else {
                // Mostrar mensaje de alerta
                window.alert('Enviando... Solo espera tu Pokémon');
            }
        });
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
