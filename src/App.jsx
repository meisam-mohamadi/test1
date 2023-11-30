import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    { name: "samsung s20", price: 200 },
    { name: "samsung s21", price: 300 },
    { name: "samsung s22", price: 400 },
    { name: "samsung s23", price: 500 },
  ];

  return (
    <div>
      {products.map((item) => {
        return <ProductCard product={item} a="as" b="kjsdf" />;
      })}
    </div>
  );
}

export default App;
