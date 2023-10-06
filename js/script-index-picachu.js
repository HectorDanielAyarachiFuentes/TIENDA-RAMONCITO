document.addEventListener("DOMContentLoaded", function () {
    // URL del JSON (reemplaza con la ubicación real del JSON)
    const jsonURL = "json/datos.json"; // Cambia el nombre del archivo a "datos.json" si está en la misma ubicación
    // Elemento donde se mostrarán los Pokémon
    const pokemonContainer = document.getElementById("pokemon-container");
    // Realiza una solicitud para cargar el JSON
    fetch(jsonURL)
        .then((response) => response.json())
        .then((data) => {
            // Almacena los datos del JSON en localStorage
            localStorage.setItem("pokemonDatos", JSON.stringify(data));
            // Itera a través de los datos de los Pokémon en el JSON
            data.forEach((pokemonData) => {
                // Crea el contenido HTML con elñ botón "Ver Más"
                const htmlContent = `
                    <div class="pokemon-card">
                        <h2>${pokemonData.nombre}</h2>
                        <img src="${pokemonData.imagen}" alt="${pokemonData.nombre} Image">
                        <p>${pokemonData.descripcion}</p>
                        <a href="detalle.html?id=${pokemonData.id}" class="ver-mas-button">Ver más</a>
                        
                    </div>
                `;
                // Agrega el contenido HTML al contenedor de Pokémon
                pokemonContainer.innerHTML += htmlContent;
            });
        })
        .catch((error) => {
            console.error("Error al cargar el JSON:", error);
        });
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
