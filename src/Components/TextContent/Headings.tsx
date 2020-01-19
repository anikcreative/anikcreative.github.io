import styled from "styled-components";

export const Heading1 = styled.h1`
  font-weight: 800;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 4.7rem;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    font-size: 4.8rem;
  }

  @media screen and (min-width: 801px) {
    font-size: 5.0rem;
  }
`;

export const Heading2 = styled.h2`
  font-weight: 800;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 3.5rem;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    font-size: 3.8rem;
  }

  @media screen and (min-width: 801px) {
    font-size: 4.0rem;
  }
`;

export const Heading3 = styled.h3`
  font-weight: 800;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    font-size: 2.6rem;
  }

  @media screen and (min-width: 801px) {
    font-size: 2.8rem;
  }
`;

export const Heading4 = styled.h4`
  font-weight: 600;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    font-size: 2.0rem;
  }

  @media screen and (min-width: 801px) {
    font-size: 2.1rem;
  }
`;