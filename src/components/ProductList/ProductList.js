import { Alert } from "@mui/material";
import Product from "../Product/Product";

const ProductList = (props) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {!props.products.length ? (
          <div className="col-start-2">
            <Alert variant="filled" severity="error">
              No Product found!
            </Alert>
          </div>
        ) : (
          props.products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onRemove={() => props.onRemove(product.id)}
              onIncrement={() => props.onIncrement(product.id)}
              onDecrement={() => props.onDecrement(product.id)}
            />
          ))
        )}
      </div>
    </>
  );
}
 
export default ProductList;