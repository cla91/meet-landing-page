import styled from "styled-components";

export const StyledGallery = styled.div`
  overflow: hidden;
  max-width: 112rem;
  display: grid;
  /* flex-wrap: wrap; */
  gap: 1.6rem;
  justify-content: center;
  grid-template-columns: repeat(2, auto);
  width: 100%;
  @media screen and (min-width: 48rem) {
    gap: 2.4rem;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  }
  @media screen and (min-width: 64rem) {
    gap: 3.2rem;
  }
  img {
    border-radius: 0.8rem;
    /* flex: none;
    width: 14rem; */
  }
`;
