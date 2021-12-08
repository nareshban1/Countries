import styled from "styled-components";

export const HomePageContainer = styled.div`
    width: 100%;
    padding:0px 10px;

`

export const CountryGrid = styled.div`
    display:grid;
    grid-template-columns: repeat(4,1fr);
    margin: 50px 0px;
    grid-gap: 50px;

    @media only screen and (max-width:1280px){
        grid-template-columns: repeat(3,1fr);
    }

    @media only screen and (max-width:950px){
        grid-template-columns: repeat(2,1fr);
    }
    @media only screen and (max-width:580px){
        grid-template-columns: repeat(1,300px);
        justify-content: center;
    }

    @media only screen and (max-width:325px){
        grid-template-columns: repeat(1,1fr);
        
    }

`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
    
   

    @media only screen and (max-width:580px){
        flex-direction: column;
    }
`