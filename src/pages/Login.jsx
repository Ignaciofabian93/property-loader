import { Fragment } from "react";
import LoginForm from "../components/LoginForm";
import { Box, Container, Typography } from "@mui/material";

export default function Login() {
  return (
    <Fragment>
      <Container maxWidth="md">
        <Box>
          <Typography sx={{ marginBottom: "30px" }} variant="h2" component="h2">
            Bienvenido
          </Typography>
          <Typography sx={{ marginBottom: "60px" }} variant="h5" component="h5">
            Ingresa usuario y contraseña
          </Typography>
        </Box>
        <Box sx={{ marginBottom: "40px" }}>
          <LoginForm />
        </Box>
      </Container>
    </Fragment>
  );
}
