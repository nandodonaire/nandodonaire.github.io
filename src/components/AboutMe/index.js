import React from "react";
import {
  AboutMeContainer,
  AboutMeTitle,
  TextContainer,
  TextSection,
  HighlightsSectionTitle,
} from "./styles";

const AboutMe = () => (
  <AboutMeContainer>
    <AboutMeTitle>About Me</AboutMeTitle>
    <TextContainer>
      <TextSection>
        <p>
          I have 3 years experience working as a full stack software engineer
          for the Innovation and Digital Health Accelerator at Boston Children's
          Hospital.
          <br />
          <br />
          I've worked with Javascript (mainly React.js), Python (especially
          Django), PHP, and SQL. I enjoy both front-end and back-end development
          and especially the interaction between the two.
          <br />
          <br />I love solving problems, constantly learning new techniques and
          tools, and improving. I feel lucky to be able to do something I love
          for a living.
        </p>
      </TextSection>
      <TextSection>
        <HighlightsSectionTitle>Highlights</HighlightsSectionTitle>
      </TextSection>
    </TextContainer>
  </AboutMeContainer>
);

export default AboutMe;
