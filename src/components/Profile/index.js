import React from "react";
import { ProfileContainer, ProfilePicture, Name } from "./styles";

const Profile = () => (
  <ProfileContainer>
    <ProfilePicture src="profile-picture.jpeg" />
    <Name>Fernando Donaire</Name>
  </ProfileContainer>
);

export default Profile;
