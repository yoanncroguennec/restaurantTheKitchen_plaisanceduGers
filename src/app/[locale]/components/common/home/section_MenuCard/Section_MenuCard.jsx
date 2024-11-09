// Source Lesson : "Youtube"
// Teacher Lesson : "CodeWithVishal"
// Desc Lesson : "Build a Slider Component in React JS"
// Link Lesson : ""
"use client"

import React, { useState } from "react";
import Categories from './categories/Categories'
import Menu from './menu/Menu'
// DATAS
import items from "../../../../utils/constants/data/dataMenuFood";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function Section_MenuCard() {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
