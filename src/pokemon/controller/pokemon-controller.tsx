import React from "react";
import PokemonAbilityEntity from "../model/entities/pokemon-ability-entity";
import PokemonEntity from "../model/entities/pokemon-entity";
import PokemonLocationEntity from "../model/entities/pokemon-location-entity";
import PokemonTypeEntity from "../model/entities/pokemon-type-entity";
import Pokemon from "../view";

interface Props {
    pokemonPromise: any;
}

interface State {
    pokemon: PokemonEntity;
}


export default class PokemonController extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            pokemon: undefined
        };
    }

    componentDidMount(): void {
        const {pokemonPromise} = this.props;
        this.getPokemonByPromise(pokemonPromise);
    }

    async getPokemonLocations(locationUrl: string): Promise<PokemonLocationEntity[]>{

        const locations: PokemonLocationEntity[] = [];

        const response = await fetch(locationUrl);
        const data = await response.json();        

        data.slice(0,2).map(location => {
            locations.push(new PokemonLocationEntity(location.location_area.name));
        });
        
        return locations;
    }

    getPokemonByPromise(promissedPokemon: Promise<any>){
        promissedPokemon.then(response => response.json())
        .then(async data => {

            if(data.id !== undefined){
                
                var pokemonTypes: PokemonTypeEntity[] = [];
                data.types.slice(0,2).map(pokemonType => {
                    console.log(pokemonType);
                    pokemonTypes.push(new PokemonTypeEntity(pokemonType.type.name))
                });
                
                var pokemonAbilities: PokemonAbilityEntity[] = [];
                data.abilities.slice(0,2).map(pokemonAbility => {pokemonAbilities.push(new PokemonAbilityEntity(pokemonAbility.ability.name))});

                const pokemonLocations = await this.getPokemonLocations(data.location_area_encounters);

                const pokemonEntity = new PokemonEntity(
                    data.id, 
                    data.name, 
                    pokemonTypes, 
                    pokemonLocations, 
                    pokemonAbilities, 
                    data.base_experience,
                    ''
                    );                
                this.setState({pokemon: pokemonEntity});
            }
        })
    }

    render() {
        return <Pokemon pokemon={this.state.pokemon} />
    }
}