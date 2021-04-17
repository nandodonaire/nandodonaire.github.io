import React, { useState, useRef } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
  HeaderContainer,
  NameSection,
  NameSectionText,
  IconContainer,
  ButtonSection,
  HeaderButton,
} from "./styles";
import { StyledLink } from "../CommonStyledComponents/StyledLink";

const Header = () => {
  const [isMenuOpen, updateIsMenuOpen] = useState(false);
  const handleMenuOpen = () => updateIsMenuOpen(true);
  const handleClose = () => updateIsMenuOpen(false);
  const hamburgerMenuAnchor = useRef();
  return (
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
      {document.body.clientWidth > 630 ? (
        <ButtonSection>
          <HeaderButton href="#about-me">About Me</HeaderButton>
          <HeaderButton href="#interests">Interests</HeaderButton>
          <HeaderButton>Contact</HeaderButton>
        </ButtonSection>
      ) : (
        <div id="hamburger-menu-container" ref={hamburgerMenuAnchor}>
          <HeaderButton onClick={handleMenuOpen}>
            <i className="fa fa-bars" />
          </HeaderButton>
          <Menu
            id="header-hamburger-menu"
            anchorEl={hamburgerMenuAnchor.current}
            keepMounted
            open={isMenuOpen}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <HeaderButton href="#about-me">About Me</HeaderButton>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <HeaderButton href="#interests">Interests</HeaderButton>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <HeaderButton>Contact</HeaderButton>
            </MenuItem>
          </Menu>
        </div>
      )}
    </HeaderContainer>
  );
};

export default Header;
