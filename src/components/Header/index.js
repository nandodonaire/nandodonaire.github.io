import React from "react";
import {
  HeaderContainer,
  NameSection,
  NameSectionText,
  IconContainer,
  ButtonSection,
  HeaderButton,
} from "./styles";
import { StyledLink } from "../commonStyledComponents/styledLink";

const Header = () => (
  <HeaderContainer>
    <NameSection>
      <NameSectionText>Fernando Donaire</NameSectionText>
      <IconContainer>
        <StyledLink
          fontColor="#cd8371"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/fernando-donaire/"
        >
          <i className="fa fa-linkedin" aria-hidden="true" />
        </StyledLink>
      </IconContainer>
      <IconContainer>
        <StyledLink
          fontColor="#cd8371"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/fernandodonaire"
        >
          <i className="fa fa-github" aria-hidden="true" />
        </StyledLink>
      </IconContainer>
    </NameSection>
    <ButtonSection>
      <HeaderButton href="#about-me">About Me</HeaderButton>
      <HeaderButton href="#interests">Interests</HeaderButton>
      <HeaderButton>Contact</HeaderButton>
    </ButtonSection>
  </HeaderContainer>
);

export default Header;
