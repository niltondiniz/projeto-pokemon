import { useEffect, useState } from "react";
import Pokemon from "./component";
import { Container, PokemonStyle, PokemonList } from "./style";
import React from "react";

export default function Home() {

    const [pokemons, setPokemons] = useState<any[]>([])

    function getPokemons(){
        var pokemonPromises = [];
        for(var i=1;i<100;i++){
            pokemonPromises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`))
        }
        console.log(pokemonPromises)
        setPokemons(pokemonPromises)
    }

    useEffect(()=>getPokemons(), [])

    return (
        <Container>
            <h1>Pokémon</h1>
            <div>
                <PokemonList>
                    {
                        pokemons.map(pokemon => {
                            return (
                                <Pokemon promissed_pokemon={pokemon}>     
                                                           
                                </Pokemon>
                            )
                        })
                    }
                    
                </PokemonList>
            </div>
        </Container>
    )
}
