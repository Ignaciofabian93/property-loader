import { Fragment } from "react";
import AddPropertyForm from "../forms/AddPropertyForm";
import { Box, Container, Typography } from "@mui/material";
import Layout from "../components/Layout";

export default function AddProperty() {
  return (
    <Fragment>
      <Layout>
        <Container sx={{ height: "100%" }} maxWidth="lg">
          <Box
            sx={{
              padding: "32px 16px",
              height: "100%",
              width: "100%",
            }}
          >
            <Typography
              sx={{ margin: "64px 0px" }}
              component={"h4"}
              variant="h4"
            >
              Agregar una propiedad
            </Typography>
            <AddPropertyForm />
          </Box>
        </Container>
      </Layout>
    </Fragment>
  );
}
