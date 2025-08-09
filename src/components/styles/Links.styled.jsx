import styled from "styled-components";

export const StyledLinks = styled.a`
  ${({ $cyan }) =>
    $cyan &&
    `
    background-color: var(--color-cyan-600);
    span {
        color: var(--color-cyan-300);
    }
    &:hover {
      background-color: #71C0D4;
    }
  `}
  ${({ $purple }) =>
    $purple &&
    `
    background-color: var(--color-purple-600);
    span {
        color: var(--color-purple-300);
    }
    &:hover {
        background-color: #B18BDD;
    }
  `}
  
  font-weight: 900;
  font-size: 1.6rem;
  line-height: 1.5;
  padding-inline: 4rem;
  padding-block: 1.6rem;
  border-radius: 2.9rem;
  min-width: fit-content;
  cursor: pointer;
`;
