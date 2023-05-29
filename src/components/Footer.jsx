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
          height: "120px",
          backgroundColor: "#00252d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          bottom: 0,
          left: 0,
        }}
      >
        <img src={logo} alt="logo image" width={200} height={100} />
      </Box>
    </Fragment>
  );
}
