import { Container, Box } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

import axios from "axios";

export default function Properties() {
  const [properties, setProperties] = useState([]);

  const getItems = async () => {
    const response = await axios.get("http://localhost:5000/propiedades");
    setProperties(response.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  console.log("pro: ", properties);

  return (
    <Fragment>
      <Container maxWidth="lg">
        <Box></Box>
      </Container>
    </Fragment>
  );
}
