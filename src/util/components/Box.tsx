import React, { Suspense } from "react";

import Skeleton from "@mui/material/Skeleton";
import renderComponents from "../renderComponents";

const MuiBox = React.lazy(() => import("@mui/material/Box"));

export default function Box({
  components = [],
  flex = false,
  spaceEvenly = false,
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
  if (centerHorizontal) sx.justifyConytent = "space-between";

  return <MuiBox sx={{ ...sx }}>{children}</MuiBox>;
}

export interface IBox {
  flex?: boolean;
  centerHorizontal?: boolean;
  centerVertical?: boolean;
  minHeight?: any;
  textAlign?: string;
  components?: any[];
  spaceEvenly: boolean;
}
