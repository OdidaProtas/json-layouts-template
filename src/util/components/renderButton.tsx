import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import doIntent from "../../intents";

export default function renderButton({
  color = "primary",
  text = "",
  clickAction,
}: any) {
  const history = useHistory();
  const intent = doIntent({ clickAction, history });
  return <Button color={color} onClick={intent}>{text}</Button>;
}
