import "./App.css";
import Pages from "./pages";

import { PagesContextProvider } from "./pages/provider";
import { StateContextProvider } from "./state/provider";

function App() {
  return (
    <PagesContextProvider>
      <StateContextProvider>
        <Pages />
      </StateContextProvider>
    </PagesContextProvider>
  );
}

export default App;
