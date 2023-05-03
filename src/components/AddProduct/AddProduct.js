import { useRef, useState } from "react";

const AddProduct = (props) => {
  const nameInput = useRef();

  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    price: "",
    qty: 1,
  });

  const nameHandler = (e) => {
    setNewProduct({ ...newProduct, name: e.target.value });
  };

  const priceHandler = (e) => {
    setNewProduct({ ...newProduct, price: e.target.value });
  };

  const addNewProduct = () => {
    if (newProduct.name && newProduct.price) {
      setNewProduct({
        id: "",
        name: "",
        price: "",
        qty: 1,
      });
      props.onAddProduct(newProduct);
      nameInput.current.focus();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addNewProduct();
    }
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8 rounded-xl border-solid border-2 border-gray-200 p-4">
      <input
        type="text"
        placeholder="Name"
        className="px-4 py-2"
        value={newProduct.name}
        onChange={nameHandler}
        ref={nameInput}
      ></input>
      <input
        type="text"
        placeholder="Price"
        className="px-4 py-2"
        value={newProduct.price}
        onChange={priceHandler}
        onKeyDown={handleKeyPress}
      ></input>
      <button
        className="mt-2 lg:col-auto sm:col-span-full transition bg-violet-800 px-4 py-2 text-white hover:bg-violet-700 sm:px-8 sm:py-3 rounded-md"
        onClick={addNewProduct}
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
