import React from "react";
import styled from "styled-components";
import { Section, Heading2 } from "../../components";
import { Colors } from "../../theme/Theme";



const Intro: React.FunctionComponent = () => {
  return (
    <StyledIntro className="intro-text">
      <IntroInnerWrapper className="intro-text-inner-wrapper">
        <Heading2 className="lead-in">
          Hello, I'm Anik.<br/>
          I design and build<br/>
          things for the web.
        </Heading2>
      </IntroInnerWrapper>
    </StyledIntro>
  );
}
export default Intro;

export const StyledIntro = styled(Section)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-end; 

  position: absolute;
  top: 0;

  @media screen and (max-width: 600px) {
    margin-top: 80px;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    margin-top: 96px;
  }

  @media screen and (min-width: 801px) {
    margin-top: 120px;
  }

  z-index: 10;
`;

const IntroInnerWrapper = styled.div`
  color: ${Colors.white};
  text-shadow: 4px -4px 2px #000000, 4px 4px 2px #000000, -4px -4px 2px #000000, -4px 4px 2px #000000;
  user-select: none;

  @media screen and (max-width: 600px) {
    max-width: 300px;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    max-width: 360px;
  }

  @media screen and (min-width: 801px) {
    max-width: 420px;
  }
`;

export const IntroSpacer = styled(Section)`
  min-height: 200vh;
`;