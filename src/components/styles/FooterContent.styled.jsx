import styled from "styled-components";
import footerImgMobile from "/src/assets/images/mobile/image-footer.jpg";
import footerImgTablet from "/src/assets/images/tablet/image-footer.jpg";
import footerImgDesktop from "/src/assets/images/desktop/image-footer.jpg";

export const StyledFooterContent = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    @media screen and (min-width: 64rem) {
      max-width: 112rem;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      margin: 0 auto;
      text-align: left;
      gap: 3.2rem;
      p {
        max-width: 35ch;
      } /* 
      h2 {
        max-width: 12ch;
      } */
    }
  }
  padding-inline: 3.2rem;
  padding-block: 6.4rem;
  margin-block-start: -2.8rem;
  /* z-index: -1; */
  background: linear-gradient(
      to top,
      rgba(77, 150, 169, 0.9),
      rgba(77, 150, 169, 0.9)
    ),
    url(${footerImgMobile}) top center no-repeat;
  background-size: cover;
  @media screen and (min-width: 48rem) {
    background: linear-gradient(
        to top,
        rgba(77, 150, 169, 0.9),
        rgba(77, 150, 169, 0.9)
      ),
      url(${footerImgTablet}) top center no-repeat;
    background-size: cover;
  }
  @media screen and (min-width: 64rem) {
    background: linear-gradient(
        to top,
        rgba(77, 150, 169, 0.9),
        rgba(77, 150, 169, 0.9)
      ),
      url(${footerImgDesktop}) top center no-repeat;
    background-size: cover;
    padding-inline: 8rem;
    padding-block: 11.2rem;
  }

  h2 {
    color: white;
  }
`;
