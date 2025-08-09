import { StyledLinks } from "./styles/Links.styled";
import { StyledContent, LinksList } from "./styles/HeroContent.styled";
export default function HeroContent() {
  return (
    <StyledContent>
      <h1>Group Chat for Everyone</h1>
      <p>
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <LinksList>
        <StyledLinks href="#" $cyan>
          Download <span>v1.3</span>
        </StyledLinks>
        <StyledLinks href="#" $purple>
          What is it?
        </StyledLinks>
      </LinksList>
    </StyledContent>
  );
}
