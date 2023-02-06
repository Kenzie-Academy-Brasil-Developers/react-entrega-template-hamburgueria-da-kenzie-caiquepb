import styled from "styled-components";

export const StyledProductList = styled.ul`
  display: flex;
  gap: 20px;

  padding: 15px 16px 20px 16px;

  overflow-y: auto;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    padding: 30px 0;

    width: 100%;
  }
`;
