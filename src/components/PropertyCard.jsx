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

export default function PropertyCard({ image, title, description }) {
  return (
    <Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Ver</Button>
          <Button size="small">Borrar</Button>
        </CardActions>
      </Card>
    </Fragment>
  );
}
