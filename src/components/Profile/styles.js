import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 50vh;
  background-color: #eaf1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  max-width: 250px;
  max-height: 250px;
`;

export const Name = styled.span`
  font-size: 2rem;
  font-weight: 500;
  font-family: Roboto;
`;

export const JobTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Roboto;
`;
