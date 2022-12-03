import React from "react";
import reducer from "./reducer";
import { defaultComponents } from "./data";

const initialState = {
  pages: [...defaultComponents],
  dispatch: () => {},
};

export const ComponentsContext = React.createContext(initialState);

interface IComponentProvider {
  children: React.ReactNode;
}

export const ComponentsContextProvider: React.FC<IComponentProvider> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(reducer as any, initialState as any);
  return (
    <ComponentsContext.Provider value={{ ...(state as any), dispatch }}>
      {children}
    </ComponentsContext.Provider>
  );
};

export const useComponentsStateValue = (label = "") => {
  const keys = label.split(".");
  const state = React.useContext(ComponentsContext);
  const interest = (state as any)[keys[0]] ?? null;
  return React.useMemo(
    () =>
      keys.reduce((prev, curr, index) => {
        if (index === 0) return prev;
        if (typeof prev === "object") return (prev ?? {})[curr];
        if (/uuid-/.test(curr)) {
          const uuid = curr.split("-")[1];
          return (prev ?? []).find((item: any) => item.uuid === uuid);
        }
        if (/id-/.test(curr)) {
          const id = curr.split("-")[1];
          return (prev ?? []).find((item: any) => item.id === id);
        }
        if(/idx-/.test(curr)){
          return (prev ?? [])[curr]
        }
        if(/key-/.test(curr)){
          return (prev ?? [])[curr]
        }
        if (prev !== null || prev !== undefined) return prev
        return prev;
      }, interest),
    [interest, label]
  );
};

export const useComponentsStateDisptch = () => useComponentsStateValue("dispatch");
