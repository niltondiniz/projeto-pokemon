import { useEffect, useState } from "react";
import { Container, PokemonStyle } from "./style";

export default function Pokemon(props:any){
    const [pokemon, setPokemon] = useState<any>()

    function getPokemonByPromise(promissedPokemon: Promise<any>){
        promissedPokemon.then(response => response.json())
        .then(data => {
            if(data.id !== undefined){
                setPokemon(data)
                console.log(data)
            }
        })
    }

    useEffect(() => getPokemonByPromise(props.promissed_pokemon), [])

    if(pokemon !== undefined){
        return (
            <Container>
                <PokemonStyle>
                    <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name}/>
                    <span>{pokemon.name}</span>
                </PokemonStyle>
            </Container>
        )
    }else{
        return(
            <div></div>
        )
    }    
}