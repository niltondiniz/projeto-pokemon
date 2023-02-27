
export function fetchPokemons(): any[]{
    var pokemonPromises = [];
    for(var i=1;i<100;i++){
        pokemonPromises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`))
    }
    console.log(pokemonPromises);
    return pokemonPromises;
}