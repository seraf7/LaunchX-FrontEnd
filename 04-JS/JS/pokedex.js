var pokemon = null;

// Función para buscar un pokemon con su nombre
const buscaPokemon = () => {
    // Obtiene objeto de HTML con el nombre
    let pokeNameInput = document.getElementById("pokeName");
    // Obtiene valor del elemento sin espacios
    let pokeName = pokeNameInput.value.trim();

    // Se valida que la entrada no sea vacia
    if(pokeName.length !== 0){
        pokeName = pokeName.toLocaleLowerCase();
        //console.log(pokeName);
        consultaAPI(pokeName);
    } else {
        console.log("Esta vacío");
    }
    return;
}

// Función para consultar API
const consultaAPI = (pokeName) => {
    // Construye URL para consultar API
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    // Se realiza solicitud
    fetch(url)
    // Bloque para manejar la respuesta
    .then((res) => {
        // Valida si la respuesta es correcta
        if(res.ok){
            // Devuelve objeto JSON
            return res.json();
        } else{
            // Respuesta errónea
            console.log("Error de API");
            apagarPokedex();
        }
    })
    // Bloque para manejar los datos JSON
    .then((data) => {
        // Valida que se recibieron datos
        if(data){
            console.log(data);
            muestraDatos(data);
        }
    })
    // Bloque para manejo de errores
    .catch((error) => {
        console.log("Upsss!! Algo salió mal");
        console.log(error);
    });
}

// Función para desplegar datos en pantalla
const muestraDatos = (pokemon) => {
    // Obtiene elementos de HTML
    const nombrePokemon = document.getElementById("nombrePokemon");
    const imgPokemon = document.getElementById("imgPokemon");
    const pantalla = document.getElementById("pantalla");

    // Establece información del pokemon
    nombrePokemon.innerHTML = pokemon.name;
    imgPokemon.src = pokemon.sprites.other["official-artwork"].front_default;
    
    pantalla.classList.add('pantalla-activa');
}

// Función para apagar el pokedex
const apagarPokedex = () => {
    // Obtiene elementos de HTML
    const nombrePokemon = document.getElementById("nombrePokemon");
    const imgPokemon = document.getElementById("imgPokemon");
    const pantalla = document.getElementById("pantalla");

    // Establece información del pokemon
    nombrePokemon.innerHTML = "???";
    imgPokemon.src = "./img/silueta.png";

    pantalla.classList.remove('pantalla-activa');
}