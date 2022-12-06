import { stateValueReducer } from "../data";
import renderTableHead from "./renderTablehead";
import renderTableRows from "./renderTableRows";

export default function renderTable(headers: any[] = [], objs: any = []) {
  const head = renderTableHead(headers);
  const rowdata = createTableData(headers, objs);
  const rows = renderTableRows(rowdata);
  return (
    <table>
      <thead>{head}</thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function createTableData(headers: any[] = [], rows: any[] = []) {
  return rows.map(
    (row: any) => headers.reduce(stateValueReducer, row) ?? "n/a"
  );
}
