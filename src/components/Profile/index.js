import React from "react";
import { ProfileContainer, ProfilePicture, Name, JobTitle } from "./styles";

const Profile = () => (
  <ProfileContainer>
    <ProfilePicture src="profile-picture.jpeg" />
    <Name>Fernando Donaire</Name>
    <JobTitle>Full Stack Software Engineer - Boston, MA</JobTitle>
  </ProfileContainer>
);

export default Profile;
