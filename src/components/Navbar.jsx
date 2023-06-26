import { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Images } from "../constants/images";
import { AuthContext } from "../context/LoginContext";

export default function Navbar() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navigateToProperties = () => {
    navigate("/");
  };

  const navigateToAddProperty = () => {
    navigate("/agregar-propiedad");
  };

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "#00252d", padding: "4px 8px" }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ marginRight: "16px" }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <img src={Images.logo} alt="logo" width={120} height={60} />
            </Box>
            {auth.token ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  color="inherit"
                  sx={{ textTransform: "capitalize" }}
                  onClick={auth.logout}
                >
                  Salir
                </Button>
              </Box>
            ) : null}
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: { width: "220px" },
        }}
      >
        <List
          sx={{
            backgroundColor: "#00252d",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <ListItem
            buttonbase
            onClick={navigateToProperties}
            sx={{ justifyContent: "center", cursor: "pointer" }}
          >
            <ListItemIcon>
              <HomeIcon sx={{ color: "#f1f1f1" }} />
            </ListItemIcon>
            <ListItemText primary="Propiedades" sx={{ color: "#f1f1f1" }} />
          </ListItem>
          <ListItem
            buttonbase
            onClick={navigateToAddProperty}
            sx={{ justifyContent: "center", cursor: "pointer" }}
          >
            <ListItemIcon>
              <AddBoxIcon sx={{ color: "#f1f1f1" }} />
            </ListItemIcon>
            <ListItemText
              primary="Agregar propiedad"
              sx={{ color: "#f1f1f1" }}
            />
          </ListItem>
        </List>
      </Drawer>
    </Fragment>
  );
}
