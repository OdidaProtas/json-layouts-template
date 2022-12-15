import MuiAvatar from "@mui/material/Avatar";
import useIntent from "../hooks/useIntent";

export default function Avatar({ clickAction = "", src }: any) {
  const handleClick = useIntent({ clickAction });
  return (
    <MuiAvatar src={src} sx={{ cursor: "pointer" }} onClick={handleClick}></MuiAvatar>
  );
}
