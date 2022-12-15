import MuiAvatar from "@mui/material/Avatar";

export default function Avatar({ clickAction = "" }: any) {
  return <MuiAvatar sx={{ cursor: "pointer" }}></MuiAvatar>;
}
