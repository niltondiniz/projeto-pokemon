import React from "react";
import PokemonListPage from "../view/pokemon-list-page";
import { fetchPokemons } from "../model/services/fetch-Pokemons-service";

interface Props{

}

interface State{
    pokemonPromisses: any[];
}

export default class PokemonListController extends React.Component<Props, State>{

    constructor(props: Props){
        super(props);
        this.state = {
            pokemonPromisses: []
        };
    }

    componentDidMount(): void{
        this.fetchPokemonsFromApi();

    }

    fetchPokemonsFromApi(){
        const data = fetchPokemons();
        this.setState({pokemonPromisses: data});
    }

    render(){
        return <PokemonListPage pokemonsPromises = {this.state.pokemonPromisses}/>;
    }
}