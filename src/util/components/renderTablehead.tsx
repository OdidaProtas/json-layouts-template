import { TableHead } from "@mui/material";
import renderText from "./renderText";

export default function renderTableHead(headers: string[] = []) {
  const headerData = headers.map((head, index) => (
    <th key={index}>{renderText(head)}</th>
  ));
  return <>{headerData}</>;
}
