import React from "react";
import Button from "@material-ui/core/Button";
import { HeaderContainer, NameSection, ButtonSection } from "./styles";

const Header = () => (
  <HeaderContainer>
    <NameSection>Fernando Donaire</NameSection>
    <ButtonSection>
      <Button>About Me</Button>
      <Button>Interests</Button>
      <Button>Contact</Button>
    </ButtonSection>
  </HeaderContainer>
);

export default Header;
