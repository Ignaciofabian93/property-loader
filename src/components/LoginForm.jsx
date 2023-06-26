import { Box, Button, TextField } from "@mui/material";
import { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../api/fetch";
import Layout from "./Layout";
import { AuthContext } from "../context/LoginContext";

export default function LoginForm() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.email && !user.password) {
      setError("Debe rellenar ambos campos");
      return;
    }

    try {
      const response = await fetchUser(user);
      const token = response.accessToken;
      auth.login(token);
      navigate("/");
    } catch (error) {
      setError("Error al iniciar sesion");
    }
  };

  return (
    <Fragment>
      <Layout>
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
            type="text"
            label="Correo"
            onChange={handleChange}
            value={user.email}
            fullWidth
            sx={{ marginBottom: "20px" }}
          />
          <TextField
            variant="outlined"
            name="password"
            type="password"
            required
            label="Contraseña"
            onChange={handleChange}
            value={user.password}
            fullWidth
            sx={{ marginBottom: "20px" }}
          />
          {error && <p>{error}</p>}
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize" }}
            onClick={handleSubmit}
          >
            Entrar
          </Button>
        </Box>
      </Layout>
    </Fragment>
  );
}
