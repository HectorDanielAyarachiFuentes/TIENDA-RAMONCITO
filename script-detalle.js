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
            <div class="pokemon-card">
                <h2>${selectedPokemon.nombre}</h2>
                <img src="${selectedPokemon.imagen}" alt="${selectedPokemon.nombre} Image">
                <p><strong>Descripción:</strong> ${selectedPokemon.descripcion}</p>
                <p><strong>Tipo:</strong> ${selectedPokemon.caracteristicas.tipo}</p>
                <p><strong>Habilidad:</strong> ${selectedPokemon.caracteristicas.habilidad}</p>
                <p><strong>Poder:</strong> ${selectedPokemon.caracteristicas.poder}</p>
                <p><strong>Votación:</strong> ${selectedPokemon.votacion}</p>
                <p><strong>Precio:</strong> $${selectedPokemon.precio.toFixed(2)}</p>
                <button class="volver-button"><a href="index-picachu.html">Volver Atrás</a></button>


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

///////COMPRA
function realizarCompra() {
    // Obtener la cantidad y el precio unitario
    const cantidad = parseFloat(document.getElementById('quantity').value);
    const precioUnitario = parseFloat(selectedPokemon.precio.toFixed(2)); // Obtener el precio desde la variable selectedPokemon

    // Validar la cantidad
    if (isNaN(cantidad) || cantidad <= 0) {
        window.alert('Por favor, ingresa una cantidad válida.');
        return;
    }

    // Calcular el precio total
    const precioTotal = cantidad * precioUnitario;

    // Dar formato al precio total con dos decimales
    const precioTotalFormateado = precioTotal.toFixed(2);

    // Mostrar una alerta de confirmación creativa
    const confirmacion = window.confirm(`¡Felicidades! Has comprado un Pokémon clonado por el módico precio de $${precioTotalFormateado}. ¿Estás seguro de querer continuar con esta adquisición única y misteriosa?`);

    if (confirmacion) {
        // Cambiar el texto del botón
        const botonCompra = document.querySelector('.buy-button');
        botonCompra.textContent = 'Producto Enviado';

        // Simular el envío del producto (aquí puedes agregar lógica adicional si es necesario)
        setTimeout(() => {
            window.alert('¡Felicitaciones! Tu Pokémon clonado ha sido enviado desde el laboratorio secreto. ¡Disfrútalo en tu aventura!');
        }, 2000); // Simulamos el envío después de 2 segundos

        // Deshabilitar el botón después de la compra
        botonCompra.disabled = true;
    }
}

