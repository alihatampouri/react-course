import { useState } from "react";
import { useProductsDispatch } from "../Providers/ProductProvider";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ProductFilter = () => {
  const dispatch = useProductsDispatch();
  const [filter, setFilter] = useState("");

  const changeFilterHandler = (e) => {
    dispatch({ type: "filter", on: "color", value: e.target.value });
    setFilter(e.target.value);
  };

  const colors = [
    { value: "red", label: "red" },
    { value: "blue", label: "blue" },
    { value: "black", label: "black" },
    { value: "green", label: "green" },
    { value: "gold", label: "gold" },
    { value: "purple", label: "purple" },
    { value: "white", label: "white" },
  ];

  return (
    <div>
      this is product filter
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        <FormControl fullWidth>
          <InputLabel id="colors-filter-label">Color</InputLabel>
          <Select
            labelId="colors-filter-label"
            value={filter}
            label="Color"
            onChange={changeFilterHandler}
          >
            <MenuItem value="">all</MenuItem>
            {colors.map((color) => (
              <MenuItem value={color.value}>{color.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default ProductFilter;
