import "./App.css";
import Pages from "./pages";

import { PagesContextProvider } from "./pages/provider";

function App() {
  return (
    <PagesContextProvider>
      <Pages />
    </PagesContextProvider>
  );
}

export default App;
