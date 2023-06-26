import { Container, Box, Typography, CircularProgress } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import Layout from "../components/Layout";
import { deleteProperty, getProperties } from "../api/fetch";
import { useNavigate } from "react-router-dom";

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  const fetchProperties = async () => {
    try {
      const data = await getProperties();
      setProperties(data);
    } catch (error) {
      throw new Error("Error al cargar propiedades");
    }
  };

  const handleDeleteProperty = async (id) => {
    try {
      await deleteProperty(id);
      const data = await getProperties();
      setProperties(data);
    } catch (error) {
      throw new Error("Error al intentar eliminar la propiedad");
    }
  };

  const goToProperty = (id) => {
    navigate(`/propiedades/${id}`);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <Fragment>
      <Layout>
        <Container sx={{ height: "100%" }} maxWidth="lg">
          <Box
            sx={{
              padding: "32px 16px",
            }}
          >
            <Typography
              sx={{ margin: "64px 0px", textAlign: "center" }}
              variant="h4"
              component={"h2"}
            >
              Propiedades disponibles
            </Typography>
            {properties.length > 0 ? (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                  height: "100%",
                  justifyContent: "space-evenly",
                }}
              >
                {properties.map((item) => (
                  <Box key={item._id} sx={{ width: "300px", margin: "16px" }}>
                    <PropertyCard
                      title={item.type}
                      mainImage={item.images[0]}
                      location={item.location}
                      description={item.description}
                      operation={item.operation}
                      price={item.price}
                      image={item.images}
                      onCLickNavigate={() => goToProperty(item._id)}
                      onClickDelete={() => handleDeleteProperty(item._id)}
                    />
                  </Box>
                ))}
              </Box>
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularProgress color="primary" />
              </Box>
            )}
          </Box>
        </Container>
      </Layout>
    </Fragment>
  );
}
