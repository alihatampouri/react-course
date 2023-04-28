import React, { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import AddPrducts from "./components/AddProduct/AddProduct";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "mellate eshgh", price: 98000, qty: 5 },
    { id: 2, name: "asare morakab", price: 45000, qty: 5 },
    { id: 3, name: "motivation", price: 78000, qty: 5 },
  ]);

  const addProductHandler = (newProduct) => {
    setProducts([
      ...products,
      {
        ...newProduct,
        id: products.length + 1,
      },
    ]);
  };

  const removeProductHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts);
  };

  const incrementProductHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);

    const product = { ...products[index] };
    product.qty++;

    const allProducts = [...products];
    allProducts[index] = product;

    setProducts(allProducts);
  };

  const decrementProductHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);

    const product = { ...products[index] };
    product.qty--;

    if (product.qty) {
      const allProducts = [...products];
      allProducts[index] = product;

      setProducts(allProducts);
    } else {
      removeProductHandler(id);
    }
  };

  return (
    <div className="App">
      <Navbar totalItems={products.length} />
      <div className="container md:container md:mx-auto px-4">
        <ProductList
          products={products}
          onRemove={removeProductHandler}
          onIncrement={incrementProductHandler}
          onDecrement={decrementProductHandler}
        />
        <AddPrducts onAddProduct={addProductHandler} />
      </div>
    </div>
  );
}

export default App;
