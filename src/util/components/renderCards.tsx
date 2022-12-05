import renderComponents from "./renderComponents";
import renderImage from "./renderImage";
import renderText from "./renderText";

export default function renderCard(
  imageUrl: string,
  title: string,
  text: string,
  actions = []
) {
  const cardImage = renderImage(imageUrl);
  const cardTitle = renderText(title, "h5");
  const cardText = renderText(text);
  const actionComponents = renderComponents(actions);
  return (
    <Box>
      {cardImage}
      {cardTitle}
      {cardText}
      {actionComponents}
    </Box>
  );
}
