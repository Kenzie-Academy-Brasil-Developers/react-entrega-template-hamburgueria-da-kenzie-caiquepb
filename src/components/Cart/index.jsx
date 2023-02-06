import { StyledCart } from "./style";

export const Cart = () => {
  return (
    <StyledCart>
      <div className="headContainer">
        <h1 className="headTitle">Carrinho de compras</h1>
      </div>
      <div className="cartContainer">
        <h1 className="cartTitle">Sua sacola está vazia</h1>
        <p className="cartParagraph">Adicione itens</p>
      </div>
    </StyledCart>
  );
};
