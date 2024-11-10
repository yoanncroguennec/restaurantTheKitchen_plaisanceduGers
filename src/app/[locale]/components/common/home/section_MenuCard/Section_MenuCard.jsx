"use client";

import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Select from "react-select";
// DATAS
import items from "../../../../utils/constants/data/dataMenuFood";
// STYLES

export default function Section_MenuCard() {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //
  const [product] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = Array.from(new Set(product.map((res) => res.category)));

  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const filterProducts = selectedCategory
    ? product.filter((product) => product.category === selectedCategory.value)
    : [];

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "50vh",
      }}
    >
      <Typography variant={matches ? "h6" : "h4"}>Notre carte</Typography>
      <Box
        sx={{
          width: "6rem",
          height: "0.25rem",
          background: "#c59d5f",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <Box style={{ width: "300px" }}>
        <Select
          isClearable
          isSearchable={false}
          options={categoryOptions}
          placeholder='Selectionnez une catégorie'
          onChange={(selectOption) => setSelectedCategory(selectOption)}
          value={selectedCategory}
        />
      </Box>
      {filterProducts.map(({ name, subCategory, desc, price }, id) => (
        <Box
          key={id}
          sx={{
            alignItems: "center",
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-evenly",
            margin: "25px 0",
            width: "100%",
          }}
        >
          <Box sx={{ width: "70%" }}>
            {subCategory}
            <Typography variant={matches ? "body1" : "h6"}>{name}</Typography>
            {desc ? (
              <Typography variant={matches ? "body2" : "body1"}>
                {desc}
              </Typography>
            ) : (
              ""
            )}
          </Box>
          <Typography sx={{ fontWeight: "bold" }} variant={matches ? "body1" : "h6"}>{price}€</Typography>
        </Box>
      ))}
    </Box>
  );
}
