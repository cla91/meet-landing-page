import styled from "styled-components";

export const StyledSectionMain = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  padding-inline: 3.2rem;
  padding-block: 3.2rem 6.4rem;
  align-items: center;
  @media screen and (min-width: 48rem) {
    padding-block: 5.6rem 6.4rem;
  }
  @media screen and (min-width: 64rem) {
    padding-inline: 8rem;
    padding-block: 5.6rem 7.2rem;
  }
`;
