export const CartProduct = ({ product, removeProductFromCart }) => {
  return (
    <>
      <img src={product.img} alt={product.name} />
      <div>
        <h1>{product.name}</h1>
        <p className="productCategory">{product.category}</p>
        <button onClick={() => removeProductFromCart(product.id)}>Remover</button>
      </div>
    </>
  );
};
