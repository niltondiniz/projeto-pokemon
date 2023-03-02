import { useEffect, useState } from "react";
import { getPokemonColorByType } from "../../utils/pokemon-colors-util";
import { Container } from "../../pokemon-list/view/style";
import { PokemonStyle } from "../../pokemon-list/view/style";
import React from "react";
import { Link } from "react-router-dom";
import PokemonEntity from "../model/pokemon-entity";
import PokemonLocationEntity from "../model/pokemon-location-entity";
import PokemonTypeEntity from "../model/pokemon-type-entity";
import PokemonAbilityEntity from "../model/pokemon-ability-entity";


interface Props{
    pokemon: PokemonEntity
}

export default class PokemonComponent extends React.Component<Props>{
   
    render(){
        
        const {pokemon} = this.props;
        
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
}