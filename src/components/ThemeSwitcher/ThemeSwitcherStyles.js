import styled from "styled-components";



export const SwitcherContainer = styled.div`
    display:flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
`

export const IconContainer = styled.div`
    color:${(props) => props.theme.textColorPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModeText = styled.p`
    margin-left: 10px;
    color:${(props) => props.theme.textColorPrimary};
`