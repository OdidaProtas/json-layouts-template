import {
  Divider,
  Checkbox,
  Chip,
  Switch,
  Badge,
  Avatar,
  FormGroup,
  FormControlLabel,
  CircularProgress,
} from "@mui/material";

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
import renderImageField from "./renderImageField";
import renderTransferList from "./renderTransferList";
import renderBox from "./renderBox";
import { IBox } from "../../components/Box";
import renderTabs from "./display/renderTabs";

export default function renderComponents(components: any[] = []) {
  return components.map((component, index) => {
    const { type, data } = component;
    switch (type) {
      case "grid": {
        const { gridItems = [], spacing } = data;
        return renderGrid(gridItems, spacing);
      }
      case "button": {
        const {
          color = "primary",
          text,
          clickAction,
          fullWidth,
          variant,
          sx = {},
          disabled,
          href,
          target,
        } = data;
        return renderButton({
          color,
          text,
          clickAction,
          variant,
          fullWidth,
          sx,
          disabled,
          href,
          target
        });
      }
      case "card": {
        const { imageUrl = "", title, text, actions } = data;
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
        const { components, label }: any = data;
        return renderForm({ components, label });
      }
      case "checkbox": {
        return <Checkbox key={index} />;
      }
      case "textfield": {
        const { label } = data;
        return renderTextField({ label });
      }
      case "tabs": {
        return renderTabs();
      }
      case "box": {
        const {
          components,
          centerHorizontal,
          centerVertical,
          minHeight,
          flex,
          textAlign,
        }: IBox = data;
        return renderBox({
          components,
          centerHorizontal,
          centerVertical,
          minHeight,
          flex,
          textAlign,
        });
      }
      case "circular_progress": {
        return <CircularProgress />;
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
        const { options, label } = data;
        return renderSelect({ options, label });
      }
      case "slider": {
      }
      case "switch": {
        const { label } = data;
        return (
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked={false} />}
              label={label}
            />
          </FormGroup>
        );
      }
      case "transfer_list": {
        return renderTransferList();
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
        const { text, variant } = data as any;
        return renderText(text, variant);
      }
      case "alert": {
        return renderAlert();
      }
      case "imagefield": {
        const { desc, value, handleChange } = data;
        return renderImageField({ desc, value, handleChange });
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
