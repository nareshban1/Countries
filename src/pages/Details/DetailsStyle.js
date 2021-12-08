import styled from "styled-components";


export const DetailsContainer = styled.div`
width: 100%;
padding:0 10px;
`

export const CountryDetails = styled.div`
margin-top: 50px;
color: ${(props) => props.theme.textColorPrimary};
display: flex;
align-items: center;

@media only screen and (max-width:580px){
      flex-direction :column ;
}


`

export const CountryFlagContainer = styled.div`
    width: 45%;

    @media only screen and (max-width:580px){
        width: 100%;
}
`
export const CountryFlag = styled.img`
    width: 100%;
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px 0px; 
`
export const CountryInfoContainer = styled.div`
margin-left: 100px;
width: 50%;
@media only screen and (max-width:580px){
        width: 100%;
        margin:0;
}
`
export const CountryInfo = styled.div`
margin-top: 20px;
display: flex;
@media only screen and (max-width:580px){
        flex-direction: column;
}
`
export const CountryInfoLeft = styled.ul`
font-size: 1rem;
`
export const CountryInfoRight = styled.ul`
margin-left: 150px;
@media only screen and (max-width:580px){
       margin-top:20px;
       margin-left: 0px;
}
`
export const CountryData = styled.li`
font-weight: 600;
margin:10px 0px ;


`
export const CountryInfoData = styled.span`
font-weight: 400;
`
export const CountryName = styled.h2`
margin-top: 20px;
`
export const CountryBorderContainer = styled.div`
margin-top: 50px;
@media only screen and (max-width:580px){
       margin-top:20px;
     
}
`
export const CountryBorders = styled.div`
`
export const CountryBorderTitle = styled.div`
font-weight: 600;

`
export const BackButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
margin-top: 50px;
box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px 0px; 
background: ${(props) => props.theme.secondaryBackground};
border: none;
padding: 5px 25px;
border-radius: 5px;
color: ${(props) => props.theme.textColorPrimary};
transition: 100ms ease;

&:hover{
    transform: scale(1.05);
}


`
