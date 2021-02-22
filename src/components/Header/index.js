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
      <HeaderButton href="#about-me-section">About Me</HeaderButton>
      <HeaderButton href="#interests-section">Interests</HeaderButton>
      <HeaderButton>Contact</HeaderButton>
    </ButtonSection>
  </HeaderContainer>
);

export default Header;
