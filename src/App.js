import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";

function App() {
  return (
    <>
      <Header />
      <main>
        <ProductsList />
        <Cart />
      </main>
    </>
  );
}

export default App;
