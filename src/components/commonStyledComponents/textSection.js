import styled from "styled-components";

export const TextSection = styled.div`
  width: 40%;
  color: ${(props) => props.fontColor};
  font-size: 1.1rem;
  font-family: Roboto;
  @media screen and (max-width: 630px) {
    width: 70%;
  }
`;
