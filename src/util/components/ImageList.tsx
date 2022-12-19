import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function WovenImageList({
  options = [],
  width = 500,
  height = 450,
}) {
  return (
    <ImageList sx={{ height, width }} variant="woven" cols={3} gap={8}>
      {options.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={`${item.value}?w=161&fit=crop&auto=format`}
            srcSet={`${item.value}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.label}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
