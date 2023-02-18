import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PokemonEntity from "../home/entities/pokemon-entity";
import { pokemonLocal } from "../utils/consts";
import { getPokemonColorByType } from "../utils/pokemon-colors";
import { CenterAlign, Container, Details, HpText, LeftAlign, PokemonStyle, RightAlign, TextItem } from "./style";

export default function PokemonDetails(){

    const [pokemon, setPokemon] = useState<PokemonEntity>()

    const [searchParams] = useSearchParams();
    console.log('Search Params: ', searchParams.get('pokemon'));
    
    useEffect(() => {
        var data = JSON.parse(searchParams.get('pokemon'));
        console.log(data);
        setPokemon(data as PokemonEntity);
    }, [])
    

    function getAbilities():JSX.Element[]{
        var abilities: JSX.Element[] = [];

        for (let i = 0; i < 2; i++) {       
            if(pokemon.abilities[i]){
                abilities.push(                
                    <TextItem><span>{pokemon.abilities[i].name}</span></TextItem>
                )            
            }
        };            
        return abilities;
    }

    function getLocations():JSX.Element[]{
        var locations: JSX.Element[] = [];
        
        for (let i = 0; i < 2; i++) {       
            if(pokemon.locations[i]){
                console.log(i);
                locations.push(                
                    <TextItem><span>{pokemon.locations[i].name}</span></TextItem>
                )            
            }
        };            
        return locations;
    }

    function getTypes():JSX.Element[]{
        var types: JSX.Element[] = [];

        for (let i = 0; i < 2; i++) {   
            if(pokemon.types[i]){
                console.log(i);
                types.push(                
                    <TextItem><span>{pokemon.types[i].name}</span></TextItem>
                )            
            }
        };            
        return types;
    }

    if(pokemon != undefined){
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

                        <div>
                            {getAbilities()}
                        </div>

                    </LeftAlign>
                    <CenterAlign>
                        <h4>Localização</h4>
                        <div>
                            {getLocations()}
                        </div>
                    </CenterAlign>
                    <RightAlign>
                        <h4>Tipo</h4>
                        <div>
                            {getTypes()}
                        </div>
                    </RightAlign>
                </Details>
            </PokemonStyle>
        </Container>
    )
    }else{
        <div></div>
    }
}