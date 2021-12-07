import styled from "styled-components";

export const NavbarContainer = styled.header`
    background: ${(props) => props.theme.secondaryBackground};
    height: 60px;
    padding: 0px 10px;
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
`

