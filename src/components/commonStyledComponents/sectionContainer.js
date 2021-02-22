import styled from "styled-components";

export const SectionContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
`;
