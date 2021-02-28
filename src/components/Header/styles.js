import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 9vh;
  align-items: center;
  background-color: #3b4660;
`;

export const NameSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NameSectionText = styled.div`
  font-size: 1.75rem;
  padding: 1rem;
  color: #cd8371;
  font-family: Roboto;
  font-weight: 500;
`;

export const IconContainer = styled.div`
  font-size: 1.3rem;
  padding: 0.5rem;
`;

export const ButtonSection = styled.div`
  justify-content: space-around;
  padding: 1rem;
`;

export const HeaderButton = styled(Button)`
  &&.MuiButton-root {
    color: #cd8371;
    font-family: Roboto;
  }
`;
