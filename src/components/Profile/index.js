import React from "react";
import {
  ProfileContainer,
  ProfilePicture,
  TextSection,
  Name,
  JobTitle,
} from "./styles";

const Profile = () => (
  <ProfileContainer>
    <ProfilePicture src="profile-picture.jpeg" />
    <TextSection>
      <Name>Fernando Donaire</Name>
      <JobTitle>Full Stack Software Engineer - Boston, MA</JobTitle>
    </TextSection>
  </ProfileContainer>
);

export default Profile;
