import { createContext, useContext, useReducer } from "react";
import { productsData } from "../../data/products";

const productContext = createContext();
const productActions = createContext();

const productReduser = (state, action) => {
  switch (action.type) {
    case "insert": {
      const { title, price } = action.insert;
      return [
        ...state,
        { id: state.lenght + 1, title: title, price: price, stock: 1 },
      ];
    }

    case "remove": {
      return state.filter((product) => product.id !== action.id);
    }

    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);

      const product = { ...state[index] };
      product.stock++;

      const allProducts = [...state];
      allProducts[index] = product;

      return allProducts;
    }

    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);

      const product = { ...state[index] };
      product.stock--;

      const allProducts = [...state];

      if (product.stock) {
        allProducts[index] = product;
      } else {
        allProducts.splice(index, 1);
      }

      return allProducts;
    }

    case "filter": {
      if (action.on === "color") {
        if (action.value === "all") {
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

    case "sort": {
      if (action.on === "price") {
        const product = [...state];
        if (action.value === "low") {
          return product.sort((a, b) => {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            return 0;
          });
        } else {
          return product.sort((a, b) => {
            if (a.price < b.price) return 1;
            if (a.price > b.price) return -1;
            return 0;
          });
        }
      }
    }

    case "search": {
      if (action.value === "") {
        return state;
      } else {
        if (action.on === "title") {
          const value = action.value.toLowerCase();

          return state.filter((product) =>
            product.title.toLowerCase().includes(value)
          );
        }
      }
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
