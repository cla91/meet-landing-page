import styled from "styled-components";

export const StyledHeroImagesContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 64rem) {
    justify-content: space-between;
  }
`;
export const HeroImg = styled.img`
  min-width: 110%;
  @media screen and (min-width: 48rem) {
    min-width: fit-content;
  }
  @media screen and (min-width: 64rem) {
    display: none;
  }
`;
export const HeroImgDesktop = styled.img`
  display: none;
  @media screen and (min-width: 64rem) {
    display: block;
  }
`;
