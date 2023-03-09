import styled from "styled-components";

interface Props{
    color: string;
}

export const Container = styled.div<Props>`
    display: flex;
    align-items: center;   
    justify-content: center; 
    background-color: ${c => c.color};
    height: 650px;    
    
    h1{
        text-align: center;
        margin: 4rem;
    }

    p {
        line-height: 3px;
    }
`

export const HpText = styled.span`
    font-size: 10px;
    font-weight: 700;
`

export const PokemonStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;    
    height: 75%;
    border-radius: 1rem;
    border: 1px solid black;    
    justify-content: center;    
    background-color: transparent;
    padding: 3rem;

    img{
        height: 150px;
        margin-right: 2rem;
        margin-top: 2rem;        
    }

    hr{
        width: 250px;
        height: 2px;        
        border-color: black;        
    }

    .pokemon-name{
        text-align: center;
        margin-top: 1rem;
        font-weight: bold;
        font-size: 2.0em;
        text-transform: capitalize;
    }
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
`

export const LeftAlign = styled.div`
    align-self: flex-start;
`

export const CenterAlign = styled.div`
    align-self: center;
`

export const RightAlign = styled.div`
    align-self: flex-end;
`