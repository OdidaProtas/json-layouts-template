// import Box, { IBox } from "../../components/Box";

import Box, { IBox } from "./components/Box";

export default function renderBox({
  components = [],
  flex = false,
  centerHorizontal = false,
  centerVertical = false,
  minHeight = "100%",
  textAlign,
  spaceEvenly = false
}: IBox) {
  return (
    <Box
      minHeight={minHeight}
      centerVertical={centerVertical}
      flex={flex}
      centerHorizontal={centerHorizontal}
      components={components}
      textAlign={textAlign}
      spaceEvenly={spaceEvenly}
    />
  );
}