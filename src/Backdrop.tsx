import React, { useMemo } from "react";
import styled from "styled-components";
import { Intro } from "./Layout";
import { Colors } from "./theme/Forge";
import { __IMAGES__ } from "./images";

interface BackdropProps {
  headlineTextColor: string;
  currentScrollTop: number;
}
const Backdrop: React.FunctionComponent<BackdropProps> = (props: BackdropProps): JSX.Element => {
  const backdropImages: string[] = [
    __IMAGES__[1],
    __IMAGES__[2],
    __IMAGES__[3],
  ];

  const renderImageSrc = (imageIndex: number) => {
    return `images/${backdropImages[imageIndex]}`;
  }

  return (
    <StyledBackdrop
      className="backdrop"
    >
      <LeftMarginDecoration/>
      <RightMarginDecoration/>

      <Screen />
      <Images>
        <StyledBackdropImage
          className="backdrop-image"
          src={renderImageSrc(2)}
          forcedHeightBreakpoint={1140}
          zIndex={5}
        />
      </Images>
    </StyledBackdrop>
  );
}
export default Backdrop;



const StyledBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${Colors.light};
  
  transform: translateZ(0);
  z-index: 1;
  overflow: hidden;
`;



const Screen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: ${Colors.dark};
  opacity: 0.1;
  z-index: 5;
`;
const Images = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  filter: contrast(1.2);
  z-index: 3;
`;
interface StyledBackdropImageProps {
  forcedHeightBreakpoint: number;
  zIndex: number;
}
const StyledBackdropImage = styled.img<StyledBackdropImageProps>`
  object-fit: cover;
  transform: translateZ(0);
  z-index: ${props => props.zIndex};

  @media screen and (max-width: ${props => props.forcedHeightBreakpoint}px) {
    max-height: 100%;
  }

  @media screen and (min-width: ${props => props.forcedHeightBreakpoint}px) {
    max-width: 100%;
  }
`;



const MarginDecorationBase = styled.div`
  position: absolute;
  top: 0;
  height: 100%;

  background: url('https://i.imgur.com/jyNpF0D.png');
  background-repeat: repeat;

  z-index: 6;

  @media screen and (max-width: 1044px) {
    display: none;
    width: 0;
  }

  @media screen and (min-width: 1044px) {
    display: block;
  }
`;

const LeftMarginDecoration = styled(MarginDecorationBase)`
  left: 0;
  @media screen and (min-width: 1044px) {
    width: calc(100% - 1044px);
  }
`;
const RightMarginDecoration = styled(MarginDecorationBase)`
  right: 0;
  @media screen and (min-width: 1280px) {
    width: calc(100% - 1280px);
  }
`;

