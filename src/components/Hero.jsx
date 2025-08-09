import { StyledHero } from "./styles/Hero.styled";
import HeroImages from "./HeroImages";
import HeroContent from "./HeroContent";
import {
  StyledHeroImagesContainer,
  HeroImg,
  HeroImgDesktop,
} from "./styles/HeroImages.styled";
import heroImg from "./../assets/images/tablet/image-hero.png";
import heroImgLeft from "./../assets/images/desktop/image-hero-left.png";
import heroImgRight from "./../assets/images/desktop/image-hero-right.png";

export default function Hero() {
  return (
    <StyledHero>
      {/* <HeroImages></HeroImages> */}
      <HeroImg src={heroImg}></HeroImg>
      <HeroImgDesktop $left src={heroImgLeft}></HeroImgDesktop>
      <HeroContent></HeroContent>
      <HeroImgDesktop $right src={heroImgRight}></HeroImgDesktop>
    </StyledHero>
  );
}
