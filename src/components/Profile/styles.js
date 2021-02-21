import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 55vh;
  background: url(https://i.imgur.com/dmpWwJ7.jpg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-size: cover;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  max-width: 300px;
  max-height: 300px;
  border: 0.4em solid #9dbcbc;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.span`
  font-size: 2rem;
  font-weight: 500;
  font-family: Roboto;
  color: #ffffff;
`;

export const JobTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Roboto;
  color: #ffffff;
`;
