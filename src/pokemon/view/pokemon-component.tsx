import { useEffect, useState } from "react";
import { getPokemonColorByType } from "../../utils/pokemon-colors-util";

import { Container } from "../../pokemon-list/view/style";
import { PokemonStyle } from "../../pokemon-list/view/style";
import React from "react";
import { Link } from "react-router-dom";
import PokemonEntity from "../../pokemon-list/model/pokemon-entity";
import PokemonLocationEntity from "../../pokemon-list/model/pokemon-location-entity";
import PokemonTypeEntity from "../../pokemon-list/model/pokemon-type-entity";
import PokemonAbilityEntity from "../../pokemon-list/model/pokemon-ability-entity";


export default function PokemonComponent(props:any){
    const [pokemon, setPokemon] = useState<PokemonEntity>()

    async function getPokemonLocations(locationUrl: string): Promise<PokemonLocationEntity[]>{

        const locations: PokemonLocationEntity[] = [];

        const response = await fetch(locationUrl);
        const data = await response.json();        

        data.slice(0,2).map(location => {
            locations.push(new PokemonLocationEntity(location.location_area.name));
        });
        
        return locations;
    }

    function getPokemonByPromise(promissedPokemon: Promise<any>){
        promissedPokemon.then(response => response.json())
        .then(async data => {

            if(data.id !== undefined){
                
                var pokemonTypes: PokemonTypeEntity[] = [];
                data.types.slice(0,2).map(pokemonType => {
                    console.log(pokemonType);
                    pokemonTypes.push(new PokemonTypeEntity(pokemonType.type.name))
                });
                
                var pokemonAbilities: PokemonAbilityEntity[] = [];
                data.abilities.slice(0,3).map(pokemonAbility => {pokemonAbilities.push(new PokemonAbilityEntity(pokemonAbility.ability.name))});

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
                    <Link to={{pathname:'/pokemon-details/', search:`?pokemon=${JSON.stringify(pokemon)}`}}>
                        <img src={`${pokemon.imageUrl}`} alt={pokemon.name}/>
                    </Link>
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