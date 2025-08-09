import { StyledFooterContent } from "./styles/FooterContent.styled";
import { StyledLinks } from "./styles/Links.styled";

export default function FooterContent() {
  return (
    <StyledFooterContent>
      <div>
        <h2>Experience more together</h2>
        <p>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <StyledLinks $purple href="#">
          Download <span>v1.3</span>
        </StyledLinks>
      </div>
    </StyledFooterContent>
  );
}
