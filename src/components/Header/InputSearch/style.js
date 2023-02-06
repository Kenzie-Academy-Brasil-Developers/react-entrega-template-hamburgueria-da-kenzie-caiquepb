import styled from "styled-components";

export const StyledInputSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 15px;

  width: 100%;
  height: 60px;

  background: var(--color-white);

  border: 2px solid var(--color-gray-20);
  border-radius: 8px;

  input {
    width: 100%;
    height: 19px;

    border: 0;

    color: var(--color-gray-20);

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }

  button {
    padding: 0px 20px;

    width: 40%;
    height: 40px;

    background: var(--color-primary);

    border: 0;
    border-radius: 8px;

    color: var(--color-white);

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }

  @media (min-width: 1024px) {
    width: 20%;
    height: 60px;
  }
`;
