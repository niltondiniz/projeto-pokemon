export function fetchPokemons(): any[]{
    var pokemonPromises = [];
    for(var i=1;i<801;i++){
        pokemonPromises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`))
    }
    return pokemonPromises;
}