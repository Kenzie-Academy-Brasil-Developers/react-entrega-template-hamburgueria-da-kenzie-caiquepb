import ProdutoTeste from "../../../assets/produtoteste.svg";
import { StyledProduct } from "./style";

export const Product = () => {
  return (
    <StyledProduct>
      <img src={ProdutoTeste} alt="Produto Teste" />
      <div>
        <h1>Hamburguer</h1>
        <p className="productCategory">Sanduíche</p>
        <p className="productValue">R$ 14.00</p>
        <button>Adicionar</button>
      </div>
    </StyledProduct>
  );
};
