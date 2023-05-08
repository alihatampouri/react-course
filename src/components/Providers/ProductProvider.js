import { createContext, useContext, useReducer } from "react";

const productContext = createContext();
const productActions = createContext();

const initialProducts = [
  { id: 1, name: "mellate eshgh", price: 98000, qty: 5 },
  { id: 2, name: "asare morakab", price: 45000, qty: 5 },
  { id: 3, name: "motivation", price: 78000, qty: 5 },
];

const productReduser = (state, action) => {
  let index, allProducts, product;

  switch (action.type) {
    case "remove":
      return state.filter((product) => product.id !== action.id);

    case "increment":
      index = state.findIndex((item) => item.id === action.id);

      product = { ...state[index] };
      product.qty++;

      allProducts = [...state];
      allProducts[index] = product;

      index = product = null;

      return allProducts;

    case "decrement":
      index = state.findIndex((item) => item.id === action.id);

      product = { ...state[index] };
      product.qty--;

      allProducts = [...state];

      if (product.qty) {
        allProducts[index] = product;
      } else {
        allProducts.splice(index, 1);
      }

      return allProducts;
  }
};

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReduser, initialProducts);

  return (
    <productContext.Provider value={products}>
      <productActions.Provider value={dispatch}>
        {children}
      </productActions.Provider>
    </productContext.Provider>
  );
};

export default ProductProvider;

export const useProducts = () => useContext(productContext);
export const useProductsDispatch = () => useContext(productActions);
