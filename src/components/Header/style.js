import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 19.15px;

  padding: 23px 16px 14px 16px;

  height: 139px;
  background: var(--color-gray-0);

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 30px 5% 37px 5%;

  }
`;
