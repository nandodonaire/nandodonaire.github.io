import React from "react";
import {
  TextContainer,
  TextSection,
  HighlightsSectionTitle,
  StyledLink,
} from "./styles";
import { SectionContainer } from "../commonStyledComponents/sectionContainer";
import { SectionTitle } from "../commonStyledComponents/sectionTitle";

const AboutMe = () => (
  <SectionContainer height="55vh" backgroundColor="#b4987f" id="about-me">
    <SectionTitle fontColor="#3b4660">About Me</SectionTitle>
    <TextContainer>
      <TextSection>
        <p>
          I have 3 years experience working as a full stack software engineer
          for the{" "}
          <StyledLink
            target="_blank"
            rel="noreferrer"
            href="https://accelerator.childrenshospital.org/"
          >
            Innovation and Digital Health Accelerator
          </StyledLink>{" "}
          at Boston Children's Hospital .
          <br />
          <br />
          I've worked with Javascript (mainly React.js), Python (especially
          Django), PHP, and SQL. I enjoy both front-end and back-end development
          and especially the interaction between the two.
          <br />
          <br />I love solving problems, constantly learning new techniques and
          tools, and improving my skills. I feel lucky to be able to do
          something I love for a living.
        </p>
      </TextSection>
      <TextSection>
        <HighlightsSectionTitle>Highlights</HighlightsSectionTitle>
        <ul>
          <li>
            Lead developer on the MRIIDS project which shows Ebola and COVID 19
            reported case/death counts as well as future projections. Public
            GitHub repo available{" "}
            <StyledLink
              target="_blank"
              rel="noreferrer"
              href="https://github.com/healthmap/mriids2"
            >
              here
            </StyledLink>
            .
          </li>
          <li>
            Full stack engineer on{" "}
            <StyledLink
              target="_blank"
              rel="noreferrer"
              href="https://www.vaccinefinder.org/"
            >
              VaccineFinder
            </StyledLink>{" "}
            which is a free online tool built in collaboration with the CDC
            where users can find vaccines and vaccine availability near them.
            More information on VaccineFinder can be found{" "}
            <StyledLink
              target="_blank"
              rel="noreferrer"
              href="https://www.cdc.gov/vaccines/covid-19/reporting/vaccinefinder.html"
            >
              here.
            </StyledLink>
          </li>
          <li>
            Full stack engineer on{" "}
            <StyledLink
              target="_blank"
              rel="noreferrer"
              href="https://medfinder.org/"
            >
              MedFinder
            </StyledLink>{" "}
            which is a free online tool where users can find medication
            availability near them.
          </li>
          <li>
            Completed a full-time Immersive Web Development program at General
            Assembly Boston.
          </li>
        </ul>
      </TextSection>
    </TextContainer>
  </SectionContainer>
);

export default AboutMe;
