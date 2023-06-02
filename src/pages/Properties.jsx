import { Container, Box } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

import axios from "axios";
import PropertyCard from "../components/PropertyCard";

export default function Properties() {
  const [properties, setProperties] = useState([]);

  const getItems = async () => {
    const response = await axios.get("http://localhost:5000/propiedades");
    setProperties(response.data);
  };

  useEffect(() => {
    getItems();
  }, [properties]);

  console.log("pro: ", properties);

  return (
    <Fragment>
      <Container maxWidth="lg">
        <Box>
          {properties.map((item) => (
            <PropertyCard
              key={item._id}
              title={item.type}
              description={item.description}
              image={item.images[0]}
            />
          ))}
        </Box>
      </Container>
    </Fragment>
  );
}
