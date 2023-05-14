import { createContext, useContext, useReducer } from "react";
import { productsData } from "../../data/products";

const productContext = createContext();
const productActions = createContext();

const productReduser = (state, action) => {
  switch (action.type) {
    case "insert": {
      const { name, price } = action.insert;
      return [
        ...state,
        { id: state.lenght + 1, name: name, price: price, qty: 1 },
      ];
    }

    case "remove": {
      return state.filter((product) => product.id !== action.id);
    }

    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);

      const product = { ...state[index] };
      product.qty++;

      const allProducts = [...state];
      allProducts[index] = product;

      return allProducts;
    }

    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);

      const product = { ...state[index] };
      product.qty--;

      const allProducts = [...state];

      if (product.qty) {
        allProducts[index] = product;
      } else {
        allProducts.splice(index, 1);
      }

      return allProducts;
    }

    case "filter": {
      if (action.on === "color") {
        if (action.value === "") {
          return productsData;
        } else {
          const filteredProducts = productsData.filter(
            (product) => product.color.indexOf(action.value) >= 0
          );
          return filteredProducts;
        }
      }
      break;
    }

    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReduser, productsData);

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
