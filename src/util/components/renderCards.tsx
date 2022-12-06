import renderComponents from "./renderComponents";
import renderImage from "./renderImage";
import renderStack from "./renderStack";
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
  const stack = [cardImage, cardTitle, cardText, actionComponents];
  const cardStack = renderStack(stack);

  return <Box>{cardStack}</Box>;
}
