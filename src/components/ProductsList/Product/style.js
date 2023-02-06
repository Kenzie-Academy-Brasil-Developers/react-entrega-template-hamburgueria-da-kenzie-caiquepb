import styled from "styled-components";

export const StyledProduct = styled.li`
  min-width: 300px;
  height: 346px;

  background: var(--color-white);

  border: 2px solid var(--color-gray-20);
  border-radius: 5px;

  img {
    height: 43%;
    width: 100%;

    background: var(--color-gray-0);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16.5px;

    width: 300px;
    min-height: 196px;

    padding: 20px 18px 23px 20px;
  }

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: var(--color-gray-100);
  }

  .productCategory {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: var(--color-gray-50);
  }

  .productValue {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: var(--color-primary);
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 106px;
    height: 40px;

    background: var(--color-primary);

    border: 2px solid var(--color-primary);
    border-radius: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    color: var(--color-white);
  }
`;
