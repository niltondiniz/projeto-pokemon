import { Container, PokemonList } from "./style";
import React from "react";
import PokemonController from "../../pokemon/controller/pokemon-controller";

interface Props {
    pokemonsPromises: any[];
}

export default class Home extends React.Component<Props> {
    
    render(){ 
        const { pokemonsPromises } = this.props;
        return(
            <Container>
                <h1>Pokémon</h1>
                <div>
                    <PokemonList>
                        {
                            pokemonsPromises.map(pokemonPromise => {
                                return (
                                    <PokemonController pokemonPromise={pokemonPromise}/>
                                )
                            })
                        }
                        
                    </PokemonList>
                </div>
            </Container>
        )
    }
}
