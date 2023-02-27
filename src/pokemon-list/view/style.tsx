import styled from "styled-components";

export const Container = styled.div`
    h1{
        text-align: center;
        margin: 4rem;
    }
`

export const PokemonList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    column-gap: 2rem;
    row-gap: 2rem;
`

