// A NE PLUS TOUCHER
"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Select from "react-select";
// DATAS
import items from "../../../../utils/constants/data/dataMenuFood";
// STYLES
import {
  RootSection_MenuCard,
  DividingLine,
  Box_No_CategorySelected,
  RootListItems,
  BoxListItems,
  BoxTitleDesc,
  BoxBtn,
  TypoBold,
} from "./StylesSection_MenuCard";

export default function Section_MenuCard() {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //
  const [seeMore, setSeeMore] = useState(false);

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
    <RootSection_MenuCard>
      <TypoBold variant={matches ? "h6" : "h4"}>Notre carte</TypoBold>
      <DividingLine />
      <Box style={{}}>
        <Select
          isClearable
          isSearchable={false} // N'affiche pas le clavier sur les appareils mobiles et empêche le zoom
          options={categoryOptions}
          placeholder='Selectionnez une catégorie'
          onChange={(selectOption) => setSelectedCategory(selectOption)}
          value={selectedCategory}
        />
      </Box>
      {selectedCategory == null ? (
        <Box_No_CategorySelected>
          <TypoBold variant={matches ? "h6" : "h4"}>
            Aucun catégorie sélectionnée
          </TypoBold>
        </Box_No_CategorySelected>
      ) : (
        <RootListItems>
          {filterProducts
            .slice(0, 8)
            .map(({ name, subCategory, desc, price }, id) => (
              <BoxListItems key={id}>
                <BoxTitleDesc>
                  {subCategory}
                  <TypoBold variant={matches ? "body1" : "h6"}>{name}</TypoBold>
                  {desc ? (
                    <Typography variant={matches ? "body2" : "body1"}>
                      {desc}
                    </Typography>
                  ) : (
                    ""
                  )}
                </BoxTitleDesc>
                <TypoBold variant={matches ? "body1" : "h6"}>{price}€</TypoBold>
              </BoxListItems>
            ))}

          {/* PARTIE VOIR PLUS DE LA LISTE DES PRODUITS DE LA CARTE */}
          {filterProducts.length > 8 ? (
            seeMore ? (
              <Box>
                {filterProducts
                  .slice(6)
                  .map(({ name, subCategory, desc, price }, id) => (
                    <BoxListItems key={id}>
                      <BoxTitleDesc>
                        {subCategory}
                        <Typography variant={matches ? "body1" : "h6"}>
                          {name}
                        </Typography>
                        {desc ? (
                          <Typography variant={matches ? "body2" : "body1"}>
                            {desc}
                          </Typography>
                        ) : (
                          ""
                        )}
                      </BoxTitleDesc>
                      <TypoBold variant={matches ? "body1" : "h6"}>
                        {price}€
                      </TypoBold>
                    </BoxListItems>
                  ))}

                <BoxBtn>
                  <Button onClick={() => setSeeMore(false)} variant='outlined'>
                    <TypoBold variant='h6'>VOIR MOINS</TypoBold>
                  </Button>
                </BoxBtn>
              </Box>
            ) : (
              <BoxBtn>
                <Button onClick={() => setSeeMore(true)} variant='outlined'>
                  <TypoBold variant='h6'>VOIR PLUS</TypoBold>
                </Button>
              </BoxBtn>
            )
          ) : null}
        </RootListItems>
      )}
    </RootSection_MenuCard>
  );
}
