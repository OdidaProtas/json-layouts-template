import Button from "./components/Button";

export interface IButton {
  color: "primary" | "secondary" | "error";
  text: string;
  clickAction: string;
  fullWidth: boolean;
  sx?: any;
  variant?: "contained" | "outlined";
  disabled: boolean;
  target: string;
  href: string;
}

export default function renderButton({
  color = "primary",
  text = "",
  clickAction,
  fullWidth = false,
  sx = {},
  variant = "contained",
  disabled = true,
  target,
  href,
}: IButton) {
  return (
    <Button
      disabled={disabled}
      text={text}
      clickAction={clickAction}
      sx={sx}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      href={href}
      target={target}
    />
  );
}