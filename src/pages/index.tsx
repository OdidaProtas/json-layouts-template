import Page from "./page";
import { PagesContextProvider } from "./provider";
import { ComponentsContextProvider } from "./../pages/components/provider";

export default function Pages() {
  return (
    <PagesContextProvider>
      <ComponentsContextProvider>
        <Page />
      </ComponentsContextProvider>
    </PagesContextProvider>
  );
}
