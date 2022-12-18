import MuiButton from "@mui/material/Button";
import useIntent from "../../hooks/useIntent";

export default function Button({
  color = "primary",
  text = "",
  clickAction,
  fullWidth,
  sx = {},
  variant = "contained",
  disabled = false,
  href,
  target,
}: any) {

  const onClick = useIntent({ clickAction })

  if (href && target) {
    return (
      <MuiButton
        sx={sx}
        fullWidth={fullWidth}
        variant={variant}
        color={color}
        disableElevation
        href={href}
        target={target}
      >
        {text}
      </MuiButton>
    );
  }

  return (
    <MuiButton
      sx={sx}
      disabled={disabled}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      disableElevation
      onClick={onClick}
    >
      {text}
    </MuiButton>
  );
}
