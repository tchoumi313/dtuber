import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selectedCategory = "New";
const SideBar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => {
          setSelectedCategory(category.name);
        }}
        style={{
          backgroundColor: category.name === selectedCategory && "#EE1606",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "20px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? "1" : "0.8",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
