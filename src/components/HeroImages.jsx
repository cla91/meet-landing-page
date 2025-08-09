import {
  StyledHeroImagesContainer,
  HeroImg,
  HeroImgDesktop,
} from "./styles/HeroImages.styled";
import heroImg from "./../assets/images/tablet/image-hero.png";
import heroImgLeft from "./../assets/images/desktop/image-hero-left.png";
import heroImgRight from "./../assets/images/desktop/image-hero-right.png";

export default function HeroImages() {
  return (
    <StyledHeroImagesContainer>
      <HeroImg src={heroImg}></HeroImg>
      <HeroImgDesktop $left src={heroImgLeft}></HeroImgDesktop>
      <HeroImgDesktop $right src={heroImgRight}></HeroImgDesktop>
    </StyledHeroImagesContainer>
  );
}
