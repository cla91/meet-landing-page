import { StyledHeader, Logo } from "./styles/Header.styled";
import meetLogo from "./../assets/images/logo.svg";
export default function Header() {
  return (
    <StyledHeader>
      <Logo src={meetLogo} alt="Meet Logo" />
    </StyledHeader>
  );
}
