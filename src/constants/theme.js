import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#00252d",
    },
    white: {
      main: "#f1f1f1",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
