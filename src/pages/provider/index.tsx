import React, { useEffect } from "react";
import reducer from "./reducer";
import { defaultPages } from "./data";
import { stateValueReducer } from "../../util/data";
import { useLocalStorage } from "../../hooks/useStorage";

const initialState = {
  pages: [...defaultPages],
  dispatch: () => { },
  loaders: {},
  theme: null,
  appId: null,
  apps: [],
  pageIndex: 0
};

export const PagesContext = React.createContext(initialState);

interface IPagesProvider {
  children: React.ReactNode;
}

export const PagesContextProvider: React.FC<IPagesProvider> = ({
  children,
}) => {
  const [appId, setAppId, deleteAppId] = useLocalStorage("appId", () => initialState.appId)
  const [state, dispatch] = React.useReducer(
    reducer as any,
    { ...initialState, appId } as any
  );
  const stateAppId = (state as any)?.appId
  React.useEffect(() => {
    if (stateAppId) setAppId(stateAppId)
    else deleteAppId();
  }, [stateAppId])
  return (
    <PagesContext.Provider value={{ ...(state as any), dispatch }}>
      {children}
    </PagesContext.Provider>
  );
};

export const usePagesStateValue = (label = "") => {
  const keys = label.split(".");
  const state = React.useContext(PagesContext);
  const interest = (state as any)[keys[0]] ?? null;
  return React.useMemo(
    () => keys.reduce(stateValueReducer, interest),
    [interest, label]
  );
};

export const usePagesStateDisptch = () => usePagesStateValue("dispatch");
