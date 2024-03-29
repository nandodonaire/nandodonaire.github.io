import React from "react";
import { SectionContainer } from "../CommonStyledComponents/SectionContainer";
import { SectionTitle } from "../CommonStyledComponents/SectionTitle";
import { SectionSubTitle } from "../CommonStyledComponents/SectionSubTitle";
import { TextContainer } from "../CommonStyledComponents/TextContainer";
import { TextSection } from "../CommonStyledComponents/TextSection";

const Interests = () => (
  <SectionContainer height="50vh" backgroundColor="#c9af98" id="interests">
    <SectionTitle fontColor="#3b4660">Interests</SectionTitle>
    <TextContainer>
      <TextSection fontColor="#3b4660">
        <SectionSubTitle>Personal Interests</SectionSubTitle>
        <ul>
          <li>
            I love traveling and learning about other cultures. I moved around a
            lot when I was growing up which I think contributed to my curiosity
            about how other people live in various places around the world.
          </li>
        </ul>
      </TextSection>
    </TextContainer>
  </SectionContainer>
);

export default Interests;
