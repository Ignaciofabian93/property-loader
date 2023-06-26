import { Box } from "@mui/material";
import { Fragment } from "react";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <Fragment>
      <Box
        component={"footer"}
        sx={{
          width: "100%",
          height: "80px",
          backgroundColor: "#00252d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          zIndex: 2,
          bottom: 0,
          left: 0,
        }}
      >
        <img src={logo} alt="logo image" width={120} height={60} />
      </Box>
    </Fragment>
  );
}
