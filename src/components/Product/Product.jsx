import { useEffect } from "react";
import { IconButton } from "@mui/material";
import {
  AddOutlined,
  DeleteOutline,
  RemoveOutlined,
} from "@mui/icons-material";

const Product = ({ product, onDecrement, onIncrement, onRemove }) => {
  useEffect(() => {
    console.log("useEffect in Product component");
    return () => console.log("unmount in Product component");
  }, []);

  return (
    <div className="flex-auto p-6 border border-gray-300 rounded-3xl">
      <div className="flex justify-between">
        <div className="text-left">
          <div className="text-xs text-gray-400 mb-2">{product.brand}</div>
          <h1 className="flex-auto font-medium text-slate-900">
            {product.title}
          </h1>
          <span className="mt-2 font-bold text-violet-600">
            {new Intl.NumberFormat().format(product.price)} IRT
          </span>
        </div>
        <div className="text-sm font-medium text-slate-400">
          stock: {product.stock}
        </div>
      </div>
      <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
        <div className="space-x-2 flex text-xs">
          <span className="text-gray-500 font-bold">colors: </span>
          {product.color.map((color) => (
            <span className="text-gray-500">{color}</span>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 text-sm font-medium">
        <div className="flex-auto flex space-x-4">
          <IconButton
            size="small"
            onClick={onDecrement}
            color="default"
            aria-label="decrement"
          >
            <RemoveOutlined fontSize="inherit" />
          </IconButton>
          <IconButton
            size="small"
            onClick={onIncrement}
            color="default"
            aria-label="increment"
          >
            <AddOutlined fontSize="inherit" />
          </IconButton>
        </div>
        <IconButton
          size="small"
          onClick={onRemove}
          color="error"
          aria-label="Remove Product"
        >
          <DeleteOutline fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
};

export default Product;
