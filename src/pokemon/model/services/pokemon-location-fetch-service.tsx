import PokemonLocationEntity from "../pokemon-location-entity";

export async function fetchPokemonLocation(locationUrl: string): 
Promise<PokemonLocationEntity[]>{
    //Vai acessar a url passada como parametro
    const locations: PokemonLocationEntity[] = [];

    const response = await fetch(locationUrl);
    //Converter para json
    const data = await response.json();

    data.slice(0,2).map(location => {
        locations.push(new PokemonLocationEntity(location.location_area.name));
    })
    
    //Retorna a lista de locations
    return locations;
} 