import React from "react";


import { categories } from "../utilities/fixedData";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <div className="sidebar"
>
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "white",
          color: "black",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "black" : "#eaeaea", }}>
        {category.name}
        </span>
     
      </button>
    ))}
  </div>
);

export default Categories;