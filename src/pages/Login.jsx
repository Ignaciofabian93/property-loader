import { Fragment } from "react";
import LoginForm from "../components/LoginForm";
import Layout from "../components/Layout";
import { Box, Container } from "@mui/material";

export default function Login() {
  return (
    <Fragment>
      <Layout>
        <Container maxWidth="md">
          <Box sx={{ marginBottom: "40px" }}>
            <LoginForm />
          </Box>
        </Container>
      </Layout>
    </Fragment>
  );
}
