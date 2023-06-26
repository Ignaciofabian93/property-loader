import { Fragment, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { getProperty } from "../api/fetch";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { Icons } from "../constants/icons";
import ModalWindow from "../components/ModalWindow";

export default function Property() {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState({});
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleFetchProperty = async () => {
      try {
        const data = await getProperty(id);
        setPropertyData(data);
      } catch (error) {
        throw new Error("Error al cargar datos de propiedad");
      }
    };
    handleFetchProperty();
  }, [id]);

  useEffect(() => {
    const checkData = () => {
      if (propertyData) {
        setImages(propertyData.images);
      }
    };
    checkData();
  }, [propertyData]);

  const clickLeft = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const clickRight = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Fragment>
      <Layout>
        <Container sx={{ height: "100%" }} maxWidth="lg">
          <Box
            sx={{
              padding: "32px 16px",
              marginBottom: "32px",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" component={"h2"}>
              Detalles de la propiedad
            </Typography>
          </Box>
          {images ? (
            <>
              <Box
                sx={{
                  width: "80%",
                  display: "flex",
                  flexDirection: {
                    mobile: "column",
                    tablet: "row",
                  },
                  margin: "0 auto",
                  boxShadow: "0 0 8px rgba(160, 160, 160, 0.5)",
                  borderRadius: "8px",
                  marginBottom: "32px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={images[currentImage]}
                    className="carousel"
                    style={{
                      borderTopLeftRadius: "8px",
                      borderBottomLeftRadius: "8px",
                      width: "100%",
                    }}
                    alt="image"
                  />
                  {propertyData?.images?.length > 1 ? (
                    <Fragment>
                      <Box onClick={() => clickLeft()}>
                        <img
                          src={Icons.arrowLeft}
                          className="icon"
                          style={{
                            position: "absolute",
                            zIndex: "2",
                            top: "48%",
                            left: "2%",
                          }}
                          alt="left arrow"
                          width={20}
                          height={20}
                        />
                      </Box>
                      <Box onClick={() => clickRight()}>
                        <img
                          src={Icons.arrowRight}
                          className="icon"
                          style={{
                            position: "absolute",
                            zIndex: "2",
                            right: "2%",
                            top: "48%",
                          }}
                          alt="right arrow"
                          width={20}
                          height={20}
                        />
                      </Box>
                    </Fragment>
                  ) : null}
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "16px",
                  }}
                >
                  <Box sx={{ marginBottom: "32px", width: "100%" }}>
                    <Box sx={{ display: "flex", margin: "8px" }}>
                      <Typography
                        sx={{ marginRight: "8px", fontWeight: "bold" }}
                      >
                        Tipo de propiedad:
                      </Typography>
                      <Typography>{propertyData.type}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", margin: "8px" }}>
                      <Typography
                        sx={{ marginRight: "8px", fontWeight: "bold" }}
                      >
                        Estado:
                      </Typography>
                      <Typography>{propertyData.state}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", margin: "8px" }}>
                      <Typography
                        sx={{ marginRight: "8px", fontWeight: "bold" }}
                      >
                        Tipo de operación:
                      </Typography>
                      <Typography>{propertyData.operation}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", margin: "8px" }}>
                      <Typography
                        sx={{ marginRight: "8px", fontWeight: "bold" }}
                      >
                        Ubicación:
                      </Typography>
                      <Typography>{propertyData.location}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", margin: "8px" }}>
                      <Typography
                        sx={{ marginRight: "8px", fontWeight: "bold" }}
                      >
                        Precio:
                      </Typography>
                      <Typography>UF{propertyData.price}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", margin: "8px" }}>
                      <Typography
                        sx={{ marginRight: "8px", fontWeight: "bold" }}
                      >
                        Descripción:
                      </Typography>
                      <Typography>{propertyData.description}</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "90%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{ textTransform: "capitalize", margin: "32px" }}
                      onClick={toggleModal}
                    >
                      Editar
                    </Button>
                  </Box>
                </Box>
              </Box>
              <ModalWindow
                modalOpen={modalOpen}
                toggleModal={toggleModal}
                propertyData={propertyData}
              />
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularProgress color="primary" />
              </Box>
            </>
          )}
        </Container>
      </Layout>
    </Fragment>
  );
}
