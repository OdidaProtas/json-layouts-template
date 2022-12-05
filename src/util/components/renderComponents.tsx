import renderCard from "./renderCards";
import renderGrid from "./renderGrid";
import renderText from "./renderText";

import renderButton from "./renderButton";
import DefaultComponent from "../../components/DefaultComponent";
import renderImage from "./renderImage";

export default function renderComponents(components: any[] = []) {
  return components.map((component, index) => {
    const { type, data } = component;
    switch (type) {
      case "grid": {
        const { gridItems = [], spacing } = data;
        return renderGrid(gridItems, spacing);
      }
      case "button": {
        const { color, text, clickAction } = data;
        return renderButton({ color, text, clickAction });
      }
      case "card": {
        const { imageUrl, title, text, actions } = data;
        return renderCard(imageUrl, title, text, actions);
      }
      case "image": {
        const { imageUrl } = data;
        return renderImage(imageUrl);
      }
      case "button_group": {
      }
      case "checkbox": {
      }
      case "fab": {
      }
      case "radio_group": {
      }
      case "rating": {
      }
      case "select": {
      }
      case "slider": {
      }
      case "switch": {
      }
      case "transfer_list": {
      }
      case "toggle_button": {
      }
      case "avatar": {
      }
      case "badge": {
      }
      case "chip": {
      }
      case "divider": {
      }
      case "icons": {
      }
      case "list": {
      }
      case "table": {
      }
      case "tooltip": {
      }
      case "text": {
        const { text } = data as any;
        return renderText(text);
      }
      case "alert": {
      }
      default: {
        return (
          <DefaultComponent key={index}>
            {renderText("No component data")}
          </DefaultComponent>
        );
      }
    }
  });
}
