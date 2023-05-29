import { Box, Button, TextField } from "@mui/material";
import { Fragment, useState } from "react";

export default function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  console.log("user: ", user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <Box
        component={"form"}
        autoComplete="off"
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "400px",
        }}
      >
        <TextField
          variant="outlined"
          name="email"
          required
          label="Correo"
          onChange={handleChange}
          value={user.email}
          fullWidth
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          variant="outlined"
          name="password"
          required
          label="Contraseña"
          onChange={handleChange}
          value={user.password}
          fullWidth
          sx={{ marginBottom: "20px" }}
        />
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize" }}
          onClick={handleSubmit}
        >
          Entrar
        </Button>
      </Box>
    </Fragment>
  );
}
