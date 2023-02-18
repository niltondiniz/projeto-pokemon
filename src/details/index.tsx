import { useState } from "react";
import PokemonEntity from "../home/entities/pokemon-entity";
import { pokemonLocal } from "../utils/consts";
import { getPokemonColorByType } from "../utils/pokemon-colors";
import { CenterAlign, Container, Details, HpText, LeftAlign, PokemonStyle, RightAlign } from "./style";

export default function PokemonDetails(){

    const [pokemon, setPokemon] = useState<PokemonEntity>(pokemonLocal as PokemonEntity)

    return (
        <Container color={getPokemonColorByType(pokemon.types[0].name)}>
            <PokemonStyle>
                <img src={pokemon.imageUrl} alt={pokemon.name}/>
                <span className="pokemon-name">{pokemon.name}</span>
                <hr />
                <HpText>{`HP ${pokemon.hp}`}</HpText>
                <Details>
                    <LeftAlign>
                        <h4>Habilidades</h4>
                        {
                            pokemon.abilities.map(ability => {
                                return (
                                    <div>                                        
                                        <p><span>{ability.name}</span></p>
                                    </div>
                                )
                            })
                        }
                    </LeftAlign>
                    <CenterAlign>
                        <h4>Localização</h4>
                        {
                            <div>                                        
                                <p><span>{pokemon.locations[0].name}</span></p>
                                <p><span>{pokemon.locations[1].name}</span></p>
                                <p><span>{pokemon.locations.length > 2 ? '...' : ''}</span></p>
                            </div>
                        }
                    </CenterAlign>
                    <RightAlign>
                        <h4>Tipo</h4>
                        {
                            pokemon.types.map(type => {
                                return (
                                    <div>                                        
                                        <p><span>{type.name}</span></p>
                                    </div>
                                )
                            })
                        }
                    </RightAlign>
                </Details>
            </PokemonStyle>
        </Container>
    )
}