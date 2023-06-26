import {
  Box,
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  OutlinedInput,
  Button,
  CircularProgress,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import {
  getProperties,
  postProperty,
  getProperty,
  updateProperty,
} from "../api/fetch";
import { useNavigate, useParams } from "react-router-dom";

export default function AddPropertyForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [data, setData] = useState({
    type: "",
    location: "",
    state: "",
    description: "",
    price: 0,
    images: [],
    operation: "",
  });

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      const handleFetchProperty = async () => {
        try {
          const data = await getProperty(id);
          setData(data);
        } catch (error) {
          throw new Error("Error al cargar datos de propiedad");
        }
      };
      handleFetchProperty();
      setIsLoading(false);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSaveProperty = async () => {
    const fetch = id ? updateProperty(id, data) : postProperty(data);
    try {
      setIsSaving(true);
      await getProperties();
      await fetch;
      setIsSaving(false);
    } catch (error) {
      throw new Error("Error al intentar guardar la propiedad");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSaveProperty();
      navigate("/");
    } catch (error) {
      throw new Error("Error al enviar la información");
    }
  };

  const getFiles = (files) => {
    console.log("files: ", files);
    if (files) {
      const filesUploaded = files.map((item) => item.base64);
      console.log("filesUp: ", filesUploaded);
      setData({
        ...data,
        images: filesUploaded,
      });
    }
  };

  return (
    <Fragment>
      {isLoading ? (
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
      ) : (
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "64px",
          }}
        >
          <Box component={"form"} onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ marginBottom: "24px" }}>
              <InputLabel id="type-select-label">Tipo</InputLabel>
              <Select
                labelId="type-select-label"
                id="type-select"
                value={data.type}
                name="type"
                label="Tipo"
                onChange={handleChange}
                required
              >
                <MenuItem value={"Casa"}>Casa</MenuItem>
                <MenuItem value={"Departamento"}>Departamento</MenuItem>
              </Select>
            </FormControl>
            <TextField
              type="text"
              sx={{ marginBottom: "24px" }}
              name="location"
              label="Comuna"
              value={data.location}
              onChange={handleChange}
              fullWidth
              required
            />
            <FormControl fullWidth sx={{ marginBottom: "24px" }}>
              <InputLabel id="state-select-label">Estado</InputLabel>
              <Select
                labelId="state-select-label"
                id="state-select"
                value={data.state}
                name="state"
                label="Estado"
                onChange={handleChange}
                required
              >
                <MenuItem value={"Nuevo"}>Nuevo (a)</MenuItem>
                <MenuItem value={"Usado"}>Usado (a)</MenuItem>
              </Select>
            </FormControl>
            <TextField
              type="text"
              sx={{ marginBottom: "24px" }}
              name="description"
              multiline
              label="Descripción"
              value={data.description}
              onChange={handleChange}
              fullWidth
              required
            />
            <FormControl fullWidth sx={{ marginBottom: "24px" }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Precio
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">UF</InputAdornment>
                }
                label="Precio"
                name="price"
                onChange={handleChange}
                value={data.price}
                required
              />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: "24px" }}>
              <InputLabel id="operation-select-label">Operación</InputLabel>
              <Select
                labelId="operation-select-label"
                id="operation-select"
                value={data.operation}
                name="operation"
                label="Operación"
                onChange={handleChange}
                required
              >
                <MenuItem value={"Comprar"}>Comprar</MenuItem>
                <MenuItem value={"Arrendar"}>Arrendar</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ marginBottom: "24px" }}>
              <FileBase64 multiple={true} onDone={getFiles} id="fileUpload" />
            </Box>
            <Box sx={{ marginBottom: "24px" }}>
              <Button
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                sx={{ textTransform: "capitalize" }}
              >
                {isSaving ? "Espere..." : "Guardar"}
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {data.images
              ? data.images.map((item) => (
                  <Box
                    key={item}
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      margin: "8px 16px",
                      justifyContent: "center",
                    }}
                  >
                    <img src={item} alt="propiedad" width={140} height={100} />
                  </Box>
                ))
              : null}
          </Box>
        </Container>
      )}
    </Fragment>
  );
}
