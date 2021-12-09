import styled from "styled-components";





export const IconContainer = styled.div`
    color:${(props) => props.theme.textColorPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModeText = styled.p`
    margin-left: 10px;
    color:${(props) => props.theme.textColorPrimary};
    transition: 100ms ease-in-out;
`

export const SwitcherContainer = styled.div`
    display:flex;
    height: 100%;
    align-items: center;
    cursor: pointer;
    
    @media only screen and (max-width:580px){
        font-size: 0.8rem;
    }

    &:hover{
        ${IconContainer} {
            color:#51ff0d ;
        }
        ${ModeText} {
            color:#51ff0d ;
        }
    }
`