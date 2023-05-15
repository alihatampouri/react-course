import { useState } from "react";
import { useProductsDispatch } from "../Providers/ProductProvider";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ProductFilter = () => {
  const dispatch = useProductsDispatch();

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const changeFilterHandler = (e) => {
    setFilter(e.target.value);
    dispatch({ type: "filter", on: "color", value: filter });
    dispatch({ type: "sort", on: "price", value: sort });
  };

  const changeSortHandler = (e) => {
    setSort(e.target.value);
    dispatch({ type: "sort", on: "price", value: sort });
  };

  const colorsFilterOptions = [
    { value: "red", label: "red" },
    { value: "blue", label: "blue" },
    { value: "black", label: "black" },
    { value: "green", label: "green" },
    { value: "gold", label: "gold" },
    { value: "purple", label: "purple" },
    { value: "white", label: "white" },
  ];

  const priceSortOptions = [
    { value: "high", label: "high" },
    { value: "low", label: "low" },
  ];

  return (
    <div>
      Product filter and sort
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        <FormControl fullWidth>
          <InputLabel id="colors-filter-label">Color Filter</InputLabel>
          <Select
            labelId="colors-filter-label"
            value={filter}
            label="Color Filter"
            onChange={changeFilterHandler}
          >
            <MenuItem value="all">all</MenuItem>
            {colorsFilterOptions.map((color) => (
              <MenuItem value={color.value}>{color.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="price-sort-label">Price Sort</InputLabel>
          <Select
            labelId="price-sort-label"
            value={sort}
            label="Price Sort"
            onChange={changeSortHandler}
          >
            <MenuItem value="">unset</MenuItem>
            {priceSortOptions.map((color) => (
              <MenuItem value={color.value}>{color.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default ProductFilter;
