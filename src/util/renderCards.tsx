import Box from "@mui/material/Box";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import renderComponents from "./renderComponents";
import renderImage from "./renderImageField";
import renderStack from "./renderStack";
import renderText from "./renderText";

export default function renderCard(
  imageUrl: string,
  title: string,
  text: string,
  actions = []
) {
  // const cardImage = renderImage(imageUrl);
  const cardTitle = renderText(title, "h5");
  const cardText = renderText(text);
  const actionComponents = renderComponents(actions);
  // const stack = [cardImage, cardTitle, cardText, actionComponents];
  const cardStack = renderStack([]);

  return <ImgMediaCard />;
}

function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
