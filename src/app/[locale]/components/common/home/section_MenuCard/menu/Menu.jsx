import { Box, Typography } from '@mui/material';
import React from 'react'


function getCategory(subCategory, id, name, img, desc, price) {

  if (subCategory === "Nos Glaces Alcoolisées") {
    return (
      <Box key={id} sx={{ alignItems: "center", display: "flex", flexWrap: "nowrap", justifyContent: "space-between", margin: "25px 0", width: "100%" }}>
        <Box sx={{ width: "70%" }}>
          {/* {subCategory} */}Nos Glaces alcoolisées
          <Typography variant="h6">{name}</Typography>
          {desc ? <Typography variant="body1">{desc}</Typography> : ""}
        </Box>
        <Typography variant="h6">{price}€</Typography>
      </Box>
    )
  }
  else if (subCategory === "Nos Glaces Non alcoolisées") {
    return (
      <Box key={id} sx={{ alignItems: "center", display: "flex", flexWrap: "nowrap", justifyContent: "space-between", margin: "25px 0", width: "100%" }}>
        <Box sx={{ width: "70%" }}>
          {/* {subCategory} */}Nos Glaces Non alcoolisées
          <Typography variant="h6">{name}</Typography>
          {desc ? <Typography variant="body1">{desc}</Typography> : ""}
        </Box>
        <Typography variant="h6">{price}€</Typography>
      </Box>
    )
  }
  else {
    return (
      <Box key={id} sx={{ alignItems: "center", display: "flex", flexWrap: "nowrap", justifyContent: "space-between", margin: "25px 0", width: "100%" }}>
        <Box sx={{ width: "70%" }}>
          {/* {subCategory} */}
          <Typography variant="h6">{name}</Typography>
          {desc ? <Typography variant="body1">{desc}</Typography> : ""}
        </Box>
        <Typography variant="h6">{price}€</Typography>
      </Box>
    )
  }
}




export default function Menu({ items }) {

  return (
    <div>
      {/* <Typography variant="h6">{items.map((item) => item.subCategory).join(", ")}</Typography> */}
      {items.map((item) => {
        const { id, name, img, desc, price, subCategory } = item;
        return getCategory(subCategory, id, name, img, desc, price)

        return (
          <Box key={id} sx={{ alignItems: "center", display: "flex", flexWrap: "nowrap", justifyContent: "space-between", margin: "25px 0", width: "100%" }}>
            <Box sx={{ width: "70%" }}>
              {subCategory}
              <Typography variant="h6">{name}</Typography>
              {desc ? <Typography variant="body1">{desc}</Typography> : ""}
            </Box>
            <Typography variant="h6">{price}€</Typography>
          </Box>
        )
      })}
    </div>
  )
}
