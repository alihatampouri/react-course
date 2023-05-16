import { useState } from "react";
import { useProductsDispatch } from "../Providers/ProductProvider";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const ProductFilter = () => {
  const dispatch = useProductsDispatch();

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const [search, setSearch] = useState("");

  const changeFilterHandler = (e) => {
    const value = e.target.value;

    dispatch({ type: "filter", on: "color", value: value });

    if (sort !== "") {
      dispatch({ type: "sort", on: "price", value: sort });
    }

    setFilter(value);
  };

  const changeSortHandler = (e) => {
    const value = e.target.value;
    dispatch({ type: "sort", on: "price", value: value });
    setSort(value);
  };

  const searchHandler = (e) => {
    const value = e.target.value;

    if (filter !== "") {
      dispatch({ type: "filter", on: "color", value: filter });
    }

    dispatch({ type: "search", on: "title", value: value });

    setSearch(value);
  };

  const colorsFilterOptions = [
    { value: "red", label: "red" },
    { value: "blue", label: "blue" },
    { value: "black", label: "black" },
    { value: "green", label: "green" },
    { value: "gold", label: "gold" },
    { value: "purple", label: "purple" },
    { value: "white", label: "white" },
    { value: "gray", label: "gray" },
    { value: "brawn", label: "brawn" },
  ];

  return (
    <>
      <div>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={searchHandler}
        />
      </div>
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
            defaultValue="high"
            labelId="price-sort-label"
            value={sort}
            label="Price Sort"
            onChange={changeSortHandler}
          >
            <MenuItem value="high">high</MenuItem>
            <MenuItem value="low">low</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default ProductFilter;
