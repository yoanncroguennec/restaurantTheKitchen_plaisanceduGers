import { Box, styled } from "@mui/material";

export const RootBtnFloat = styled(Box)({
  background: "",
  height: "200px",
  position: "fixed",
  top: "35vh",
  width: "150px",
  zIndex: 999,
});

export const BtnMenu = styled(Box)({
  cursor: "pointer",
  left: "20px",
  position: "absolute",
  top: "70px",
});

export const StylesListOfOpenBtns = styled(Box)(
  ({ borderColor_Hover, first, navbar, left, top }) => ({
    left: left,
    opacity: first ? 1 : 0,
    padding: "20px",
    position: "absolute",
    top: top,
    "&:hover": {
      background: navbar ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 1)",
      // background: "rgba(255, 255, 255, 0.10)",
      backdropFilter: "blur(50px)",
      border: `2px solid ${borderColor_Hover}`,
      borderRadius: "50%",
      boxShadow: "0 0 40px #21EBFF",
      padding: "20px",
    },
  })
);