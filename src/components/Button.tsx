import MuiButton from '@mui/material/Button'
import { useHistory } from "react-router-dom";
import useIntent from '../hooks/useIntent';

export default function Button({
  color = "primary",
  text = "",
  clickAction,
  fullWidth,
  sx = {},
  variant = "contained",
}: any) {
  
  const history = useHistory();
  const intent = useIntent({ clickAction, history });

  return (
    <MuiButton
      sx={sx}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      disableElevation
      onClick={intent}
    >
      {text}
    </MuiButton>
  );
}
