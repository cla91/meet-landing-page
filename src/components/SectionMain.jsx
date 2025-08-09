import { StyledSectionMain } from "./styles/SectionMain.styled";
import Number from "./Number";
import Gallery from "./Gallery";
import SectionContent from "./SectionContent";
export default function SectionMain() {
  return (
    <StyledSectionMain>
      <Number>01</Number>
      <Gallery></Gallery>
      <SectionContent></SectionContent>
    </StyledSectionMain>
  );
}
