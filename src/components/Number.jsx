import { StyledNumber } from "./styles/Number.styled";

export default function Number({ children }) {
  return (
    <StyledNumber>
      <span></span>
      <p>{children}</p>
    </StyledNumber>
  );
}
