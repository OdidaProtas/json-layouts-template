import Box, { IBox } from "../../components/Box";

export default function renderBox({
  components = [],
  flex = false,
  centerHorizontal = false,
  centerVertical = false,
  minHeight = "100%",
  textAlign
}: IBox) {
  return (
    <Box
      minHeight={minHeight}
      centerVertical={centerVertical}
      flex={flex}
      centerHorizontal={centerHorizontal}
      components={components}
      textAlign={textAlign}
    />
  );
}
