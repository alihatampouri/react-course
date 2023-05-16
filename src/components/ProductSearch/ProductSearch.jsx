import { TextField } from "@mui/material";
import { useProducts } from "../Providers/ProductProvider";
import { useProductsDispatch } from "../Providers/ProductProvider";
import { useState } from "react";

const ProductSearch = (props) => {
  const dispatch = useProductsDispatch();

  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    const value = e.target.value;

    dispatch({ type: "search", on: "title", value: value });
    setSearch(value);
  };

  return (
    <div {...props}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={changeHandler}
      />
    </div>
  );
};

export default ProductSearch;
