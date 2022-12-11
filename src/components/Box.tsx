import MuiBox from "@mui/material/Box";
import React from "react";
import renderComponents from "../util/components/renderComponents";

export default function Box({
  components = [],
  flex = false,
  centerHorizontal = false,
  centerVertical = false,
  minHeight = "100%",
  textAlign = "left",
}: IBox) {
  const children = React.useMemo(
    () => renderComponents(components),
    [components]
  );

  let sx: any = {};

  if (flex) sx.display = "flex";
  if (centerHorizontal) sx.justifyContent = "center";
  if (centerVertical) sx.alignItems = "center";
  if (minHeight) sx.minHeight = minHeight;
  if (textAlign) sx.textAlign = "center";

  return <MuiBox sx={{ ...sx }}>{children}</MuiBox>;
}

export interface IBox {
  flex?: boolean;
  centerHorizontal?: boolean;
  centerVertical?: boolean;
  minHeight?: any;
  textAlign?: string;
  components?: any[];
}
