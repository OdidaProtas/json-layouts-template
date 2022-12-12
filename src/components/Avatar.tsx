import MuiAvatar from "@mui/material/Avatar";
import useIntent from "../hooks/useIntent";

export default function Avatar({ clickAction = "" }: any) {
  const handleClick = useIntent({ clickAction });
  return (
    <MuiAvatar sx={{ cursor: "pointer" }} onClick={handleClick}></MuiAvatar>
  );
}
