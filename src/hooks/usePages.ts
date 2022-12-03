import { usePagesStateValue } from "../pages/provider";

export default function usePages() {
  const pages = usePagesStateValue("pages");
  return [...pages];
}
