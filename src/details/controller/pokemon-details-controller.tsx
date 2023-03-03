import React from "react";
import PokemonEntity from "../../pokemon/model/pokemon-entity";
import { useSearchParams } from "react-router-dom";
import PokemonDetailsView from "../view";


interface Props{

}

interface State{
    pokemon: PokemonEntity;
}

export default class PokemonDetailsController extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            pokemon: undefined
        }
    }
   
    private getPokemonData(): void {

        const params = new URLSearchParams(window.location.search);
        var data = JSON.parse(params.get('pokemon'));
        this.setState({ pokemon: data as PokemonEntity });
    }
    componentDidMount(): void{
        this.getPokemonData();

    }
    

    render(){
        if(this.state.pokemon != undefined)
       console.log('Dados do pokemon definidos');
       return(
            <PokemonDetailsView pokemon = {this.state.pokemon}/>
        )
    }

}