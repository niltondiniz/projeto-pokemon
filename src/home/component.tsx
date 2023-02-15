import { useEffect, useState } from "react";
import { getPokemonColorByType } from "../utils/pokemon-colors-util";
import PokemonAbilityEntity from "./entities/pokemon-ability-entity";
import PokemonEntity from "./entities/pokemon-entity";
import PokemonLocationEntity from "./entities/pokemon-location-entity";
import PokemonTypeEntity from "./entities/pokemon-type-entity";
import { Container, PokemonStyle } from "./style";

export default function Pokemon(props:any){
    const [pokemon, setPokemon] = useState<PokemonEntity>()

    async function getPokemonLocations(locationUrl: string): Promise<PokemonLocationEntity[]>{

        const locations: PokemonLocationEntity[] = [];

        const response = await fetch(locationUrl);
        const data = await response.json();        

        data.map(location => {
            locations.push(new PokemonLocationEntity(location.location_area.name));
        });
        
        return locations;
    }

    function getPokemonByPromise(promissedPokemon: Promise<any>){
        promissedPokemon.then(response => response.json())
        .then(async data => {

            if(data.id !== undefined){
                
                var pokemonTypes: PokemonTypeEntity[] = [];
                data.types.map(pokemonType => {
                    console.log(pokemonType);
                    pokemonTypes.push(new PokemonTypeEntity(pokemonType.type.name))
                });
                
                var pokemonAbilities: PokemonAbilityEntity[] = [];
                data.abilities.map(pokemonAbility => {pokemonAbilities.push(new PokemonAbilityEntity(pokemonAbility.ability.name))});

                const pokemonLocations = await getPokemonLocations(data.location_area_encounters);

                const pokemonEntity = new PokemonEntity(
                    data.id, 
                    data.name, 
                    pokemonTypes, 
                    pokemonLocations, 
                    pokemonAbilities, 
                    data.base_experience,
                    ''
                    );                
                setPokemon(pokemonEntity)                
            }
        })
    }

    useEffect(() => getPokemonByPromise(props.promissed_pokemon), [])

    if(pokemon !== undefined){
        return (
            <Container>
                <PokemonStyle color={getPokemonColorByType(pokemon.types[0].name)}>
                    <img src={`${pokemon.imageUrl}`} alt={pokemon.name}/>
                    <span>{pokemon.name.toUpperCase()}</span>
                </PokemonStyle>
            </Container>
        )
    }else{
        return(
            <div></div>
        )
    }    
}