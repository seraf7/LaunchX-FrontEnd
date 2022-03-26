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
    agregaTipo(pokemon.types);
    cargaStats(pokemon.stats);
    cargaMovimientos(pokemon.moves);
    
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

// Función para agregar tipos del pokemon
const agregaTipo = (types) => {
    let pantalla = document.getElementById("contenedor-tipo");

    // Limpia contenedor
    while(pantalla.firstChild){
        pantalla.removeChild(pantalla.firstChild);
    };

    types.forEach(elemento => {
        let tipo = document.createElement("p");
        tipo.setAttribute("class", "tipo");
        tipo.innerHTML = elemento.type.name;

        pantalla.appendChild(tipo);
    });
}

// Función para agregar estadísticas
const cargaStats = (stats) => {
    stats.forEach(elemento => {        
        let barStat = document.getElementById(elemento.stat.name);
        barStat.setAttribute("value", elemento.base_stat);
    });
}

// Función para agregar lista de movimientos
const cargaMovimientos = (moves) => {
    let pantalla = document.getElementById("pantalla-mov");

    // Limpia contenedor
    while(pantalla.firstChild){
        pantalla.removeChild(pantalla.firstChild);
    };

    moves.forEach(elemento => {
        let tarjeta = document.createElement("div");
        tarjeta.setAttribute("class", "tarjeta-mov");
        tarjeta.innerHTML = elemento.move.name;

        pantalla.appendChild(tarjeta);
    });
}