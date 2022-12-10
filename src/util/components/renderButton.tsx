import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import useIntent from "../../hooks/useIntent";

export interface IButton {
  color: "primary" | "secondary" | "error";
  text: string;
  clickAction: string;
  fullWidth: boolean;
  sx?: any;
  variant?: "contained" | "outlined";
}

export default function renderButton({
  color = "primary",
  text = "",
  clickAction,
  fullWidth = false,
  sx = {},
  variant = "contained",
}: IButton) {
  const history = useHistory();


  return (
    <Button text={text}  clickAction={clickAction} sx={sx} fullWidth={fullWidth} variant={variant} color={color} />
  );
}
