import { Container } from "../../utilities/commonStyles";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { Logo, Navbar, NavbarContainer } from "./NavbarStyles";

const NavBar = () => {
  return (
    <NavbarContainer>
      <Container>
        <Navbar>
          <Logo>Where in the world?</Logo>
          <ThemeSwitcher />
        </Navbar>
      </Container>
    </NavbarContainer>
  );
};

export default NavBar;
