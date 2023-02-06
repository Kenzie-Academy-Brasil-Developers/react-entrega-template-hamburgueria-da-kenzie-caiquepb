import styled from "styled-components";

export const StyledCart = styled.div`
  padding: 0 16px 16px 16px;

  .headContainer {
    display: flex;
    align-items: center;

    padding-left: 21px;

    height: 65px;

    background: var(--color-primary);
    border-radius: 5px 5px 0px 0px;
  }
  .headTitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: var(--color-white);
  }

  .cartContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    height: 158px;

    background: var(--color-gray-0);
  }
  .cartTitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: var(--color-gray-100);
  }
  .cartParagraph {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    color: var(--color-gray-50);
  }
`;
