import {
  Divider,
  Switch,
  FormGroup,
  FormControlLabel,
  CircularProgress,
  Paper,
  Stack,
} from "@mui/material";

import RenderCard from "./renderCards";
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
import renderImage from "./renderImage";
import renderTable from "./renderTable";
import renderForm from "./renderForm";
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
import ButtonGroup from "./components/ButtonGroup";

export default function renderComponents(components: any[] = []) {
  return components.map((component, index) => {
    const {
      type,
      data = {
        components: [],
      },
    } = component;
    switch (type) {
      case "stack": {
        const { direction, components = [], spacing } = data;
        return (
          <Stack key={index} spacing={spacing} direction={direction}>
            {renderComponents([...components])}
          </Stack>
        );
      }
      case "grid": {
        const { components = [], spacing = 2 }: any = data;
        return renderGrid({ components, spacing });
      }
      case "autocomplete": {
        const { options = [], label = "Select" } = data;
        return <Autocomplete label={label} options={options} key={index} />;
      }
      case "buttongroup": {
        const { options = [] } = data;
        return <ButtonGroup options={options} key={index} />;
      }
      case "dialog": {
        const { buttonText, components = [] } = data;
        return (
          <SimpleDialog
            key={index}
            components={components}
            buttonText={buttonText}
          />
        );
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
        const { imageUrl = "", title, body, actions = [] } = data;
        return (
          <RenderCard
            actions={actions}
            body={body}
            title={title}
            imageUrl={imageUrl}
          />
        );
      }
      case "image": {
        const { imageUrl } = data;
        return renderImage(imageUrl);
      }
      case "imagelist": {
        const { options = [], height = 450, width = 600 } = data;
        return (
          <WovenImageList
            width={width}
            height={height}
            key={index}
            options={options}
          />
        );
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
        const { defaultChecked = false } = data;
        return <Checkbox defaultChecked={defaultChecked} key={index} />;
      }
      case "textfield": {
        const { label, type } = data;
        return renderTextField({ label, type });
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
        const { options, buttonText } = data;
        return (
          <TemporaryDrawer
            key={index}
            buttonText={buttonText}
            options={options}
          />
        );
      }
      case "link": {
        const { href, text } = data;
        return <UnderlineLink href={href} text={text} key={index} />;
      }
      case "menu": {
        const { options = [] } = data;
        return <PositionedMenu options={options} />;
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
        const { options = [] } = data;
        return <RadioButtonsGroup key={index} options={options} />;
      }
      case "rating": {
        const { initialValue = 3 } = data;
        return <Rating key={index} initialValue={initialValue} />;
      }
      case "container": {
        const { components = [] } = data;
        return <SimpleContainer components={components} />;
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
        const { options = [] } = data;
        return <ToggleButton key={index} options={options} />;
      }
      case "accordion": {
        return <ControlledAccordions key={index} />;
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
        const { options = 0 } = data;
        return renderList({ options });
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
