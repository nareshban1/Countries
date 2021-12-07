import styled from "styled-components";


export const CardContainer = styled.div`
    border-radius: 5px;
    overflow: hidden;
    background-color: ${(props) => props.theme.secondaryBackground};
    box-shadow: 0px 0px 10px 0px ${(props) => props.theme.textColorSecondary} ;
    color: ${(props) => props.theme.textColorPrimary};
    

`

export const FlagImage = styled.img`
height: 180px;
width: 100%;
`

export const CountryDetails = styled.div`

padding: 20px;


`
export const CountryName = styled.h3`
`
export const CountryInfo = styled.ul`
margin-top: 20px;
`

export const CountryInfoItem = styled.li`
font-weight: 600;
margin:10px 0px ;
`

export const CountryInfoData = styled.span`
font-weight: 400;
`