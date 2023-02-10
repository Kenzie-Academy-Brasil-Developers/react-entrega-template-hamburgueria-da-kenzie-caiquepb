export const CartTotal = ({ cart, setCart }) => {


  return (
    <>
      <h3>Total</h3>
      <h3>
        {cart
          .reduce(
            (previousValue, currentValue) => previousValue + currentValue.price,
            0
          )
          .toLocaleString("pt-Br", {
            style: "currency",
            currency: "BRL",
          })}
      </h3>
      <button onClick={() => setCart([])}>Remover Todos</button>
    </>
  );
};
