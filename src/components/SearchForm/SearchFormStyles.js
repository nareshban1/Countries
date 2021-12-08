import styled from "styled-components";
import { FaSearch } from "react-icons/fa"


export const Searchform = styled.form`
    height: 60px;
    min-width: 500px;
    border-radius: 5px;
    background: ${(props) => props.theme.secondaryBackground};
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px 0px; 
    display: flex;
    font-size: 1rem;

    @media only screen and (max-width:580px){
        min-width: 100px;
        }

`

export const SearchInput = styled.input`
    height: 100%;
    width: 100%;
    border:none;
    outline: none;
    color : ${(props) => props.theme.textColorPrimary};
    background-color: transparent;
    

`

export const SearchButton = styled.button`
    width: 20%;
    background-color: transparent;
    border:none;
    outline: none;
    color : ${(props) => props.theme.textColorPrimary};
    display: grid;
    place-items: center;
`

export const SearchIcon = styled(FaSearch)`
    font-size: 1rem;
`