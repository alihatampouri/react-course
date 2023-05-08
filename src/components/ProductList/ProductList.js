import { Alert } from "@mui/material";
import Product from "../Product/Product";
import { useProducts, useProductsDispatch } from "../Providers/ProductProvider";

const ProductList = (props) => {
  const products = useProducts();
  const dispatch = useProductsDispatch();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {!products.length ? (
          <div className="col-start-2">
            <Alert variant="filled" severity="error">
              No Product found!
            </Alert>
          </div>
        ) : (
          products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onRemove={() => dispatch({ type: "remove", id: product.id })}
              onIncrement={() =>
                dispatch({ type: "increment", id: product.id })
              }
              onDecrement={() =>
                dispatch({ type: "decrement", id: product.id })
              }
            />
          ))
        )}
      </div>
    </>
  );
};

export default ProductList;
