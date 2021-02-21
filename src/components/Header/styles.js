import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 9vh;
  align-items: center;
  background-color: #006666;
`;

export const NameSection = styled.div`
  font-size: 1.75rem;
  padding: 1rem;
  color: #ffffff;
  font-family: Roboto;
  font-weight: 500;
`;

export const ButtonSection = styled.div`
  justify-content: space-around;
  padding: 1rem;
`;

export const HeaderButton = styled(Button)`
  &&.MuiButton-root {
    color: #ffffff;
    font-family: Roboto;
  }
`;
