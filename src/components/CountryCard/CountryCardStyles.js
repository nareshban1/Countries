import { Link } from "react-router-dom";
import styled from "styled-components";


export const CardContainer = styled(Link)`
    border-radius: 5px;
    overflow: hidden;
    background-color: ${(props) => props.theme.secondaryBackground};
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px 0px; 
    color: ${(props) => props.theme.textColorPrimary};
    transition: 100ms ease;

    &:hover{
        transform: scale(1.05);
    }
    
    

`

export const FlagImage = styled.img`
height: 180px;
width: 100%;
`

export const CountryDetails = styled.div`

padding: 20px;


`
export const CountryName = styled.h4`

`
export const CountryInfo = styled.ul`
margin-top: 20px;
font-size: 1rem;
`

export const CountryInfoItem = styled.li`
font-weight: 600;
margin:10px 0px ;
`

export const CountryInfoData = styled.span`
font-weight: 400;
`