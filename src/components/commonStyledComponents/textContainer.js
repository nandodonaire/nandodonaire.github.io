import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50rem;
  justify-content: space-evenly;
  overflow: auto;
  @media screen and (max-width: 630px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
