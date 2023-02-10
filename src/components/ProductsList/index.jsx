import { Product } from "./Product";
import { StyledProductList } from "./style";

export const ProductsList = ({ list, addProductToCart }) => {
  return (
    <StyledProductList>
      {list.map((product) => (
        <Product
          key={product.id}
          product={product}
          addProductToCart={addProductToCart}
        />
      ))}
    </StyledProductList>
  );
};
