import { Component, Fragment } from "react";
import { Alert } from "@mui/material";
import Product from "../Product/Product";

class ProductList extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('CDU run', prevProps, prevState);
  }

  render() {
    return (
      <Fragment>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {!this.props.products.length ? (
            <div className="col-start-2">
              <Alert variant="filled" severity="error">No Product found!</Alert>
            </div>
          ) : (
            this.props.products.map((product) => (
              <Product
                key={product.id}
                product={product}
                onRemove={() => this.props.onRemove(product.id)}
                onIncrement={() => this.props.onIncrement(product.id)}
                onDecrement={() => this.props.onDecrement(product.id)}
              />
            ))
          )}
        </div>
      </Fragment>
    );
  }
}

export default ProductList;
