import { useEffect } from "react";
import { IconButton } from "@mui/material";
import {
  AddOutlined,
  DeleteOutline,
  RemoveOutlined,
} from "@mui/icons-material";

const Product = ({ product, onDecrement, onIncrement, onRemove }) => {
  useEffect(()=>{
    console.log('useEffect in Product component')
    return () => console.log('unmount in Product component')
  },[])

  return (
    <div className="flex justify-between items-center rounded-xl border-solid border-2 border-gray-200 py-2 px-3">
      <h2 className="text-lg font-semibold text-slate-900">{product.title}</h2>
      <div className="flex flex-col justify-evenly text-secondary-900 text-[10px]">
        <span className="font-sans text-sm">Product Price</span>
        <span className="opacity-50">{new Intl.NumberFormat().format(product.price)} IRT</span>
      </div>
      <div className="rounded-md border-solid border">
        <IconButton
          onClick={onDecrement}
          color="default"
          aria-label="decrement"
        >
          <RemoveOutlined />
        </IconButton>
        <span>{product.stock}</span>
        <IconButton
          onClick={onIncrement}
          color="default"
          aria-label="increment"
        >
          <AddOutlined />
        </IconButton>
      </div>
      <IconButton
        onClick={onRemove}
        color="error"
        aria-label="Remove Product"
      >
        <DeleteOutline />
      </IconButton>
    </div>
  );
};

export default Product;
