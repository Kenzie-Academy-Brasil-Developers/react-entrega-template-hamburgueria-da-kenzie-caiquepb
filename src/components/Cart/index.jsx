import { CartProduct } from "./CartProduct";
import { CartTotal } from "./CartTotal";
import { StyledCart } from "./style";

export const Cart = ({
  cart,
  setCart,
  removeProductFromCart,
}) => {
  if (cart.length > 0) {
    return (
      <StyledCart>
        <div className="headContainer">
          <h1 className="headTitle">Carrinho de compras</h1>
        </div>
        {cart.map((product) => (
          <CartProduct
            key={product.id}
            product={product}
            removeProductFromCart={removeProductFromCart}
          />
        ))}
        <CartTotal
          cart={cart}
          setCart={setCart}
        />
      </StyledCart>
    );
  } else {
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
  }
};
