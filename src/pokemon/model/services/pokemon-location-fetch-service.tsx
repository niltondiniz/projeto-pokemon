import PokemonLocationEntity from "../pokemon-location-entity";

export async function fetchPokemonLocation(locationUrl: string): Promise<PokemonLocationEntity[]>{

    const locations: PokemonLocationEntity[] = [];

    const response = await fetch(locationUrl);
     const data = await response.json();

     data.slice(0,2).map(location =>{
         locations.push(new PokemonLocationEntity(location.location_area.name))
     })

     return locations

}