import usePages from "../hooks/usePages";
import Page from "./page";

export default function Pages() {
  usePages();
  return <Page />;
}
