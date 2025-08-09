import styled from "styled-components";

export const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
  padding-block: 6.4rem 3.2rem;
  overflow: hidden;
  @media screen and (min-width: 48rem) {
    padding-block: 6.4rem;
  }

  @media screen and (min-width: 64rem) {
    flex-direction: row;
    justify-content: center;
  }
`;
