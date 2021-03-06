import React from "react";
import { Section } from "../../components";
import { Colors } from "../../theme";
import styled from "styled-components";
import {
  ProjectInsight,
  FloodReady,
  FrostEnsemble,
  MWPStudio
} from "./WorkItems";



interface WorkSectionProps {
  containerRef?: React.RefObject<HTMLDivElement>;
}
export const Work: React.FC<WorkSectionProps> = (props: WorkSectionProps) => {
  return (
    <StyledWorkSection 
      className="work-section"
      ref={props.containerRef}
    >
      <ProjectInsight/>
      <FloodReady />
      <FrostEnsemble />
      <MWPStudio />
    </StyledWorkSection>
  );
}
export default Work;

const StyledWorkSection = styled.div`
  padding-top: 20px;
  padding-bottom: 0;
  background: ${Colors.light};

  & > .work-item {
    &:nth-child(3n - 2) {
      background: ${Colors.light};
    }
    &:nth-child(3n - 1) {
      background: ${Colors.bright};
    }
    &:nth-child(3n) {
      background: ${Colors.white};
    }
  }
`;