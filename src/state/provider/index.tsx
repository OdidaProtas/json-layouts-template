import React from "react";
import { stateValueReducer } from "../../util/data";
import reducer from "../reducer";
import { app } from "./data";

const initialState = {
  app: { ...app },
  dispatch: () => {},
  loaders: {},
  currentUser: {},
};

export const StateContext = React.createContext(initialState);

interface IStateProvider {
  children: React.ReactNode;
}

export const StateContextProvider: React.FC<IStateProvider> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(
    reducer as any,
    initialState as any
  );
  return (
    <StateContext.Provider value={{ ...(state as any), dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = (label = "") => {
  const keys = label.split(".");
  const state = React.useContext(StateContext);
  const interest = (state as any)[keys[0]] ?? null;
  return React.useMemo(
    () => keys.reduce(stateValueReducer, interest),
    [interest, label]
  );
};

export const useDispatch = () => useStateValue("dispatch");
