import DefaultComponent from "../../components/DefaultComponent";

export default function renderComponents(components: any[] = []) {
  return components.map((component) => {
    const { type, data, clickAction } = component;
    switch (type) {
      case "autocomplete": {
      }
      case "button": {
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
      case "typography": {
      }
      case "alert": {
      }
      default: {
        return <DefaultComponent>'No component data'</DefaultComponent>;
      }
    }
  });
}
