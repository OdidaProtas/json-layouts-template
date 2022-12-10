import "./App.css";
import { ErrorBoundary } from "./features/errorBoundary";
import Pages from "./pages";

import { PagesContextProvider } from "./pages/provider";
import { StateContextProvider } from "./state/provider";

function App() {
  return (
    <ErrorBoundary>
      <PagesContextProvider>
        <StateContextProvider>
          <Pages />
        </StateContextProvider>
      </PagesContextProvider>
    </ErrorBoundary>
  );
}

export default App;
