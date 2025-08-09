import styled from "styled-components";

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
  padding-inline: 3.2rem;
  h1 {
    max-width: 10ch;
  }
  p {
    max-width: 40ch;
  }
  @media screen and (min-width: 64rem) {
    flex: 0 0 fit-content;
    gap: 3.2rem;
  }
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  @media screen and (min-width: 48rem) {
    flex-direction: row;
  }
`;
