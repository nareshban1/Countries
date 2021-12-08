import styled from "styled-components";
import Select from "react-dropdown-select";

export const SelectDropdown = styled(Select)`
  height: 60px;
  min-width: 200px;
  border-radius: 5px !important;
  border: none !important;
  background: ${(props) => props.theme.secondaryBackground};
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px 0px;
  color: ${(props) => props.theme.textColorPrimary};

  @media only screen and (max-width: 580px) {
    max-width: 200px;
    margin-top:50px;
  }

  .react-dropdown-select-dropdown {
    width: 100%;
    border-radius: 5px !important;
    background: ${(props) => props.theme.secondaryBackground};
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px 0px !important;
    border: none !important;
  }

  .react-dropdown-select-item {
    color: ${(props) => props.theme.textColorPrimary} !important;
    border: none;
  }
  .react-dropdown-select-item-selected {
    background: ${(props) => props.theme.mainBackground} !important;
    color: ${(props) => props.theme.textColorPrimary} !important;
    border: none !important;
  }
 
`;
