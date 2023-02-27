import React from "react";
import { fetchPokemons } from "../model/services/fetch-pokemons-service";
import Home from "../view";

interface Props {

}

interface State {
    pokemonsPromises: any[];
}

export default class PokemonListController extends React.Component<Props, State>{
    
    constructor(props: Props){
        super(props);
        this.state = {
            pokemonsPromises: []
        };
    }

    componentDidMount(): void {
        this.fetchPokemonsFromApi();
    }

    fetchPokemonsFromApi(){
        const data = fetchPokemons();
        this.setState({pokemonsPromises: data});
    }

    render() {
        return <Home pokemonsPromises={this.state.pokemonsPromises}/>
    }
}