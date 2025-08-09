import styled from "styled-components";

export const StyledSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
  span {
    text-transform: uppercase;
    color: var(--color-cyan-600);
    font-style: normal;
    font-size: 1.2rem;
    line-height: 1.1;
    font-weight: 900;
    letter-spacing: 0.4rem;
    @media screen and (min-width: 48rem) {
      font-size: 1.4rem;
    }
    @media screen and (min-width: 64rem) {
      font-size: 1.6rem;
    }
  }
  h2 {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    max-width: 16ch;
  }
  p {
    max-width: 47ch;
  }
`;
