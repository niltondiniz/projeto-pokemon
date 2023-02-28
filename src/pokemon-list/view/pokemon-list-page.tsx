import { useEffect, useState } from "react";
import PokemonComponent from "../../pokemon/view/pokemon-component";
import { Container, PokemonStyle, PokemonList } from "./style";
import React from "react";

interface Props{
    pokemonsPromises: any[];
}

export default class PokemonListPage extends React.Component<Props>{

    render(){

        const {pokemonsPromises} = this.props;
        const pokemons = pokemonsPromises;

        return (
            <Container>
                <h1>Pokedex</h1>
                <div>
                    <PokemonList>
                        {
                            pokemons.map(pokemon => {
                                return (
                                    <PokemonComponent promissed_pokemon={pokemon}>     
                                                            
                                    </PokemonComponent>
                                )
                            })
                        }
                        
                    </PokemonList>
                </div>
            </Container>
        )
    }
}
