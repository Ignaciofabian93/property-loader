import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import logo from "../assets/images/logo.png";
import menu from "../assets/icons/list.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "#00252d", padding: "4px 8px" }}
        >
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className="icon"
                src={menu}
                alt="menu icon"
                width={30}
                height={30}
                onClick={toggleDrawer}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "40px",
              }}
            >
              <img src={logo} alt="logo" style={{ width: 140, height: 60 }} />
            </Box>
            <Typography component="div" variant="div" sx={{ flexGrow: 1 }}>
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: 0,
                  marginRight: "40px",
                }}
              >
                <li style={{ margin: "0 10px" }}>Propiedades</li>
                <li style={{ margin: "0 10px" }}>Agregar propiedad</li>
              </ul>
            </Typography>
            <Button
              sx={{
                textTransform: "capitalize",
                fontSize: "14px",
                fontWeight: 600,
                backgroundColor: "#f1f1f1",
                color: "#00252d",
              }}
              variant="contained"
              onClick={goToLogin}
              color="inherit"
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <List
          sx={{
            backgroundColor: "#00252d",
            height: "100%",
            width: "220px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <ListItem buttonBase sx={{ textAlign: "center" }}>
            <ListItemText sx={{ color: "#f1f1f1" }} primary="Propiedades" />
          </ListItem>
          <ListItem buttonBase sx={{ textAlign: "center" }}>
            <ListItemText
              sx={{ color: "#f1f1f1" }}
              primary="Agregar propiedad"
            />
          </ListItem>
        </List>
      </Drawer>
    </Fragment>
  );
}
