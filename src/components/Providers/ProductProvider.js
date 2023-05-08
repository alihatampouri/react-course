import { createContext, useContext, useReducer } from "react";

const productContext = createContext();
const productActions = createContext();

const initialProducts = [
  { id: 1, name: "mellate eshgh", price: 98000, qty: 5 },
  { id: 2, name: "asare morakab", price: 45000, qty: 5 },
  { id: 3, name: "motivation", price: 78000, qty: 5 },
];

const productReduser = (state, action) => {
  console.log(state, action);
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
