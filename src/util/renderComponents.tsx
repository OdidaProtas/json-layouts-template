import {
  Divider,
  Switch,
  FormGroup,
  FormControlLabel,
  CircularProgress,
  Paper,
} from "@mui/material";

import renderCard from "./renderCards";
import renderGrid from "./renderGrid";
import renderText from "./renderText";

import renderButton from "./renderButton";
import renderTextField from "./renderTextField";
import renderAppbar from "./renderAppbar";
import renderSelect from "./renderSelect";
import renderList from "./renderList";
import renderAlert from "./renderAlert";
import renderTooltip from "./renderTooltip";
import renderRating from "./renderRating";
import renderImageField from "./renderImageField";
import renderBox from "./renderBox";
import renderImage from "../renderImage";
import renderTable from "../renderTable";
import renderForm from "../renderForm";
import renderTabs from "./renderTabs";
import { IBox } from "./components/Box";
import DefaultComponent from "./components/DefaultComponent";
import Autocomplete from "./components/AutoComplete";
import Checkbox from "./components/Checkbox";
import Fab from "./components/Fab";
import RadioButtonsGroup from "./components/RadioGroup";
import Rating from "./components/Rating";
import Slider from "./components/Slider";
import TransferList from "./components/TransferList";
import ToggleButton from "./components/ToggleButton";
import Avatar from "./components/Avatar";
import SimpleBadge from "./components/Badge";
import BasicChips from "./components/Chip";
import SimpleDialog from "./components/Dialog";
import Progress from "./components/Progress";
import Skeleton from "./components/Skeleton";
import SimpleSnackbar from "./components/Snackbar";
import ControlledAccordions from "./components/Accordions";
import WovenImageList from "./components/ImageList";
import SimpleContainer from "./components/Container";
import HorizontalStepper from "./components/Stepper";
import BasicSpeedDial from "./components/SpeedDial";
import PaginationOutlined from "./components/Pagination";
import PositionedMenu from "./components/Menu";
import UnderlineLink from "./components/Link";
import TemporaryDrawer from "./components/Drawer";
import Crumbs from "./components/Crumbs";
import BottomNav from "./components/BottomNav";
import Paypal from "./components/Paypal";

export default function renderComponents(components: any[] = []) {
  return components.map((component, index) => {
    const {
      type,
      data = {
        components: [],
      },
    } = component;
    switch (type) {
      case "grid": {
        const { components = [], spacing = 2 }: any = data;
        return renderGrid({ components, spacing });
      }
      case "autocomplete": {
        return <Autocomplete />;
      }
      case "dialog": {
        return <SimpleDialog />;
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
          target,
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
      case "imagelist": {
        return <WovenImageList />;
      }
      case "table": {
        const { rows = [], headers = [] }: any = data;
        return renderTable(headers, rows);
      }
      case "form": {
        const { components = [], label }: any = data;
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
      case "paper": {
        const { elevation = 1, padding = 2, components: cmps = [] }: any = data;
        return (
          <Paper elevation={elevation} sx={{ p: padding }}>
            {renderComponents(cmps)}
          </Paper>
        );
      }
      case "box": {
        const {
          components = [],
          centerHorizontal,
          centerVertical,
          minHeight,
          flex,
          textAlign,
          spaceEvenly,
        }: IBox = data;
        return renderBox({
          components,
          centerHorizontal,
          centerVertical,
          minHeight,
          flex,
          textAlign,
          spaceEvenly,
        });
      }
      case "circular_progress": {
        return <CircularProgress />;
      }
      case "breadcrumbs": {
        return <Crumbs />;
      }
      case "drawer": {
        return <TemporaryDrawer />;
      }
      case "link": {
        return <UnderlineLink />;
      }
      case "menu": {
        return <PositionedMenu />;
      }
      case "paypal": {
        return <Paypal />;
      }
      case "speeddial": {
        return <BasicSpeedDial />;
      }
      case "pagination": {
        return <PaginationOutlined />;
      }
      case "sketon": {
        return <Skeleton />;
      }
      case "bottom_navigation": {
        return <BottomNav />;
      }
      case "snackbar": {
        return <SimpleSnackbar />;
      }
      case "progress": {
        return <Progress />;
      }
      case "stepper": {
        return <HorizontalStepper />;
      }
      case "appbar": {
        return renderAppbar();
      }
      case "radio_group": {
      }
      case "select": {
        const { options = [], label } = data;
        return renderSelect({ options, label });
      }
      case "slider": {
        return <Slider />;
      }
      case "fab": {
        return <Fab />;
      }
      case "radiogroup": {
        return <RadioButtonsGroup />;
      }
      case "rating": {
        return <Rating />;
      }
      case "container": {
        return <SimpleContainer />;
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
      case "transferlist": {
        // return renderBox({});
        return <TransferList />;
      }
      case "togglebutton": {
        return <ToggleButton />;
      }
      case "accordion": {
        return <ControlledAccordions />;
      }
      case "avatar": {
        const { clickAction = "", imageUrl } = data;
        return <Avatar imageUrl={imageUrl} clickAction={clickAction} />;
      }
      case "badge": {
        return <SimpleBadge />;
      }
      case "chip": {
        return <BasicChips />;
      }
      case "divider": {
        return <Divider sx={{ my: 2 }} />;
      }
      // case "icons": {
      // }
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
