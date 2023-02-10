import { StyledProduct } from "./style";

export const Product = ({ product, addProductToCart }) => {
  return (
    <StyledProduct>
      <img src={product.img} alt={product.name} />
      <div>
        <h1>{product.name}</h1>
        <p className="productCategory">{product.category}</p>
        <p className="productValue">
          {product.price.toLocaleString("pt-Br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button onClick={() => addProductToCart(product)}>Adicionar</button>
      </div>
    </StyledProduct>
  );
};
