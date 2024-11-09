import React from 'react'

export default function ProducersAndPartners() {
  return (
    <div>ProducersAndPartners</div>
  )
}


// "use client";

// import React, { useState } from "react";
// import { Box, Typography } from "@mui/material";
// import { dataProducersAndPartners } from "@/app/[locale]/utils/constants/data/dataProducersAndPartners";

// export default function ProducersAndPartners() {
//   const [hoverBox, setHoverBox] = useState({});

//   function handleHoverBox_Enter(id: number) {
//     setHoverBox((prevState) => ({
//       ...hoverBox,
//       [id]: !prevState[id],
//     }));
//     // setHoverBox(true);
//   }
//   function handleHoverBox_Leave() {
//     setHoverBox(false);
//   }

//   const [myStyle, setMyStyle] = useState({});
//   const messages = [
//     { content: "hi" },
//     { content: "bonjour" },
//     { content: "hola" },
//   ];

//   function handleClick(id: number) {
//     setMyStyle((prevState) => ({
//       ...myStyle,
//       [id]: !prevState[id],
//     }));
//   }

//   function hoverEnter(id: number) {
//     setMyStyle((prevState) => ({
//       ...myStyle,
//       [id]: !prevState[id],
//     }));
//   }

//   function hoverLeave(id: number) {
//     setMyStyle((prevState) => ({
//       ...myStyle,
//       [id]: !prevState[id],
//     }));
//   }

//   return (
//     <Box>
//       <Typography variant='h6'>
//         Liste de nos producteurs et partenaires
//       </Typography>

//       <div>
//         <h2>Clickable items:</h2>
//         {messages.map((message, i) => (
//           <div
//             key={i}
//             style={{
//               boxShadow: myStyle[`${i}`]
//                 ? "4px 3px 8px 0px rgba(1, 156, 48, 0.3)"
//                 : "initial",
//             }}
//             onClick={() => handleClick(i)}
//           >
//             {message.content}
//           </div>
//         ))}
//         <h2>State:</h2>
//         <pre>{JSON.stringify(myStyle, null, 2)}</pre>
//       </div>

//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "10px",
//         }}
//       >
//         {dataProducersAndPartners.map(
//           ({ id, name, address, description, img }) => (
//             <Box
//               onMouseEnter={() => handleHoverBox_Enter(id)}
//               onMouseLeave={handleHoverBox_Leave}
//               sx={{
//                 alignItems: "center",
//                 background: id == hoverBox ? "#00F" : "#FFF",
//                 border: "1px solid #000",
//                 display: "flex",
//                 flexDirection: "column",
//                 padding: "10px",
//               }}
//             >
//               <Typography variant='h6'>{name}</Typography>
//               <Typography variant='h6'>{address}</Typography>
//               <Typography variant='h6'>{description}</Typography>
//             </Box>
//           )
//         )}
//       </Box>

//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "10px",
//         }}
//       >
//         <Box
//           onMouseEnter={handleHoverBox_Enter}
//           onMouseLeave={handleHoverBox_Leave}
//           sx={{
//             alignItems: "center",
//             background: hoverBox ? "#00F" : "#FFF",
//             border: "1px solid #000",
//             display: "flex",
//             flexDirection: "column",
//             padding: "10px",
//           }}
//         >
//           <Typography variant='h6'>Simon Descat - Jardin Parpalhou</Typography>
//           <Typography variant='h6'>Ju-Belloc, 32160</Typography>
//           <Typography variant='h6'>
//             Salade, pommes de terre, légumes de saison
//           </Typography>
//         </Box>
//         <Box>
//           <Typography variant='h6'>
//             Ecotopie Plaisance, 32160 Plaisance ( herbes et legumes bio)
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
