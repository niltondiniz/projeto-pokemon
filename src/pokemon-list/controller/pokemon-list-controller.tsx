import React from "react";
import { fetchPokemons } from "../model/services/fetch-pokemons-service";
import PokemonListPage from "../view/pokemon-list-page";

interface Props {

}

interface State {
    pokemonPromises: any[];
}

export default class PokemonListController extends React.Component<Props, State>{

    constructor(props: Props){
        super(props);
        this.state = {
            pokemonPromises: []
        };
    }

    componentDidMount(): void{
        this.fetchPokemonsFromApi();
    }

    fetchPokemonsFromApi(){
        const data = fetchPokemons();
        console.log(data);
        this.setState({pokemonPromises: data});
    }

    render(){
        return <PokemonListPage pokemonsPromises={this.state.pokemonPromises} />;
    }
}