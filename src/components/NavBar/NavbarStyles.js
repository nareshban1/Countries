import styled from "styled-components";

export const NavbarContainer = styled.header`
    background: ${(props) => props.theme.secondaryBackground};
    height: 70px;
    padding: 0px 10px;
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px 0px; 
    
`

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    
`

export const Logo = styled.h1`
    font-weight:600;
    font-size: 1.5rem;
    color : ${(props) => props.theme.textColorPrimary};
    @media only screen and (max-width:580px){
        font-size: 1rem;
    }
`

