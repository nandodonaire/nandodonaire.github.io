import React from "react";
import {
  HeaderContainer,
  NameSection,
  ButtonSection,
  HeaderButton,
} from "./styles";

const Header = () => (
  <HeaderContainer>
    <NameSection>Fernando Donaire</NameSection>
    <ButtonSection>
      <HeaderButton>About Me</HeaderButton>
      <HeaderButton>Interests</HeaderButton>
      <HeaderButton>Contact</HeaderButton>
    </ButtonSection>
  </HeaderContainer>
);

export default Header;
