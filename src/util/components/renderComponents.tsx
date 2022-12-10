import { Divider, Checkbox, Chip, Switch, Badge, Avatar } from "@mui/material";

import renderCard from "./renderCards";
import renderGrid from "./renderGrid";
import renderText from "./renderText";

import renderButton from "./renderButton";
import DefaultComponent from "../../components/DefaultComponent";
import renderImage from "./renderImage";
import renderTable from "./renderTable";
import renderForm from "./renderForm";
import renderTextField from "./renderTextField";
import renderAppbar from "./renderAppbar";
import renderSelect from "./renderSelect";
import renderList from "./renderList";
import renderAlert from "./renderAlert";
import renderTooltip from "./renderTooltip";
import renderRating from "./renderRating";

export default function renderComponents(components: any[] = []) {
  return components.map((component, index) => {
    const { type, data } = component;
    switch (type) {
      case "grid": {
        const { gridItems = [], spacing } = data;
        return renderGrid(gridItems, spacing);
      }
      case "button": {
        const { color, text, clickAction, fullWidth, variant, sx = {} } = data;
        return renderButton({
          color,
          text,
          clickAction,
          variant,
          fullWidth,
          sx,
        });
      }
      case "card": {
        const { imageUrl, title, text, actions } = data;
        return renderCard(imageUrl, title, text, actions);
      }
      case "image": {
        const { imageUrl } = data;
        return renderImage(imageUrl);
      }
      case "table": {
        const { rows = [], headers = [] }: any = data;
        return renderTable(headers, rows);
      }
      case "form": {
        return renderForm({});
      }
      case "checkbox": {
        return <Checkbox key={index} />;
      }
      case "textfield": {
        return renderTextField();
      }
      case "appbar": {
        return renderAppbar();
      }
      case "radio_group": {
      }
      case "rating": {
        return renderRating();
      }
      case "select": {
        return renderSelect();
      }
      case "slider": {
      }
      case "switch": {
        return <Switch />;
      }
      case "transfer_list": {
      }
      case "toggle_button": {
      }
      case "avatar": {
        return <Avatar />;
      }
      case "badge": {
        return <Badge />;
      }
      case "chip": {
        return <Chip />;
      }
      case "divider": {
        return <Divider sx={{ my: 1 }} />;
      }
      case "icons": {
      }
      case "list": {
        return renderList({ children: null });
      }
      case "tooltip": {
        return renderTooltip();
      }
      case "text": {
        const { text } = data as any;
        return renderText(text);
      }
      case "alert": {
        return renderAlert();
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
