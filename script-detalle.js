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
