/* eslint-disable react/prop-types */
import { Fragment } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export default function PropertyCard({
  title,
  location,
  description,
  operation,
  price,
  mainImage,
  onCLickNavigate,
  onClickDelete,
}) {
  return (
    <Fragment>
      <Card
        elevation={16}
        sx={{ maxWidth: 300, borderRadius: "8px", width: "100%" }}
      >
        <CardMedia
          sx={{ height: 160, width: "100%" }}
          image={mainImage}
          title={title}
        />
        <CardContent sx={{ padding: "8px" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            sx={{ textAlign: "left" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "left" }}
          >
            {location}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "left" }}
          >
            {operation}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "left", marginBottom: "8px" }}
          >
            UF{price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "left" }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end", marginTop: "16px" }}>
          <Button
            size="small"
            variant="contained"
            sx={{ textTransform: "capitalize" }}
            onClick={onCLickNavigate}
          >
            Ver
          </Button>
          <Button
            size="small"
            variant="outlined"
            sx={{ textTransform: "capitalize" }}
            onClick={onClickDelete}
          >
            Borrar
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
}
