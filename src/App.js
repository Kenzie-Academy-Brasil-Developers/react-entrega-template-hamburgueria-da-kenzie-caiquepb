import { useState, useEffect } from "react";
import "./App.css";

import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { api } from "./services/api";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function showProducts() {
      try {
        const response = await api.get("products");
        setProductsList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    showProducts();
  }, []);

  const addProductToCart = (currentProduct) => {
    if (!cart.some((product) => product.id === currentProduct.id)) {
      setCart([...cart, currentProduct]);
    } else {
      alert("Você já escolheu esse produto");
    }
  };

  const removeProductFromCart = (productId) => {
    const newCart = cart.filter((product) => product.id !== productId);
    setCart(newCart);
  };

  const filterProducts = (input) => {
    const filteredProducts = productsList.filter((product) => {
      return product.name.toLowerCase().includes(input.toLowerCase());
    });
    setSearch(filteredProducts);
  };

  return (
    <>
      <Header filterProducts={filterProducts} />
      <main>
        <ProductsList
          list={search.length > 0 ? search : productsList}
          addProductToCart={addProductToCart}
        />
        <Cart
          cart={cart}
          setCart={setCart}
          removeProductFromCart={removeProductFromCart}
        />
      </main>
    </>
  );
}

export default App;
