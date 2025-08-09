import styled from "styled-components";

export const StyledNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-slate-600);
  z-index: 9999;
  span {
    display: block;
    height: 8rem;
    width: 0.1rem;
    background-color: var(--color-slate-300);
  }
  p {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 100%;
    border: 0.1rem solid var(--color-slate-300);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }
`;
