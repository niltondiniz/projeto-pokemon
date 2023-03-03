import PokemonAbilityEntity from "./pokemon-ability-entity";
import PokemonLocationEntity from "./pokemon-location-entity";
import PokemonTypeEntity from "./pokemon-type-entity";

export default class PokemonEntity{
    id: number;
    name: string;
    types: PokemonTypeEntity[];
    locations: PokemonLocationEntity[];
    abilities: PokemonAbilityEntity[];
    hp: number;
    imageUrl: string;

    constructor(id: number, name: string, types: PokemonTypeEntity[], locations: PokemonLocationEntity[], abilities: PokemonAbilityEntity[], hp: number){
        this.id = id;
        this.name = name;
        this.types = types;
        this.locations = locations;
        this.abilities = abilities;
        this.hp = hp;
        this.imageUrl = this.generateImageUrl(id);
    }

    generateImageUrl(id: number): string{
        const imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;
        return imageUrl;
    }
}