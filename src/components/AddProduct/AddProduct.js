import { useRef } from "react";
import { useProductsDispatch } from "../Providers/ProductProvider";

const AddProduct = (props) => {
  const dispatch = useProductsDispatch();

  const nameInput = useRef();
  const priceInput = useRef();

  const addNewProduct = () => {
    const name = nameInput.current.value;
    const price = priceInput.current.value;

    if (name && price) {
      nameInput.current.value = priceInput.current.value = "";
      nameInput.current.focus();

      return dispatch({
        type: "insert",
        insert: {
          name: name,
          price: price,
        },
      });
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
        ref={nameInput}
      ></input>
      <input
        type="number"
        placeholder="Price"
        className="px-4 py-2"
        onKeyDown={handleKeyPress}
        ref={priceInput}
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
