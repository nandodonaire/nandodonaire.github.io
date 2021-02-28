import React from "react";
import { SectionContainer } from "../commonStyledComponents/sectionContainer";
import { SectionTitle } from "../commonStyledComponents/sectionTitle";
import { TextContainer } from "../commonStyledComponents/textContainer";
import { TextSection } from "../commonStyledComponents/textSection";

const Interests = () => (
  <SectionContainer height="50vh" backgroundColor="#c9af98" id="interests">
    <SectionTitle fontColor="#3b4660">Interests</SectionTitle>
    <TextContainer>
      <TextSection fontColor="#3b4660"></TextSection>
      <TextSection fontColor="#3b4660"></TextSection>
    </TextContainer>
  </SectionContainer>
);

export default Interests;
