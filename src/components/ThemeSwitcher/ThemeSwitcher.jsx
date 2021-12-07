import {
  IconContainer,
  ModeText,
  SwitcherContainer,
} from "./ThemeSwitcherStyles";

import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../../contextAPI/ThemeProvider";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <SwitcherContainer onClick={toggleTheme}>
      <IconContainer>
        {theme === "dark" ? (
          <BsSunFill></BsSunFill>
        ) : (
          <BsMoonStarsFill></BsMoonStarsFill>
        )}
      </IconContainer>
      <ModeText>{theme === "dark" ? "Light Mode" : "Dark Mode"}</ModeText>
    </SwitcherContainer>
  );
};

export default ThemeSwitcher;
