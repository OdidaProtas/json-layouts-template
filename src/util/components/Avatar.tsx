import MuiAvatar from "@mui/material/Avatar";

export default function Avatar({ clickAction = "", imageUrl }: any) {
  return <MuiAvatar  src={imageUrl} sx={{ cursor: "pointer" }}></MuiAvatar>;
}
