import React from "react";
import { useAxios } from "./useAxios";
import {useParams} from "react-router-dom";

import { usePagesStateDisptch, usePagesStateValue } from "../pages/provider";
import { defaultTheme } from "../uidata/DefaultTheme";

export default function useTheme() {
  const theme = usePagesStateValue("theme") ?? defaultTheme;
  const loadingTheme = usePagesStateValue("loaders.theme");

  const { updateTheme, toggleThemeLoader } = useActions();
  const axios = useAxios();
  async function updateState() {
    toggleThemeLoader(true);
    const response = await axios.get("/theme");
    const data = response.data;
    if (data) {
      updateTheme(data);
      toggleThemeLoader(false);
      return;
    }
    toggleThemeLoader(false);
  }

  const couldBeEmpty =
    theme === null &&
    (loadingTheme === null || loadingTheme === undefined) &&
    !loadingTheme;

  React.useEffect(() => {
    if (couldBeEmpty) updateState();
  }, [couldBeEmpty]);

  return { ...theme };
}

function useActions() {
  const dispatchToPages = usePagesStateDisptch();

  const { id } = useParams() as any;

  const theme = usePagesStateValue("theme");
  const loaders = usePagesStateValue("loaders");
  const loadingTheme = usePagesStateValue("loaders.theme");

  const userError = usePagesStateValue("errors.users");
  const userImage = usePagesStateValue(`users.id-${id}.imageurl`);
  const defaultRole = usePagesStateValue(`users.id-${id}.roles.idx-1.id`);
  
  const permissions = usePagesStateValue(
    `permissions.key-role,${defaultRole},.permits`
  );

  const updateTheme = React.useCallback(
    (payload: any[]) => {
      const type = "update_all";
      const key = "theme";
      dispatchToPages({ payload, type, key });
    },
    [theme]
  );

  const toggleThemeLoader = React.useCallback(
    (state: boolean) => {
      const type = "update_all";
      const key = "loaders";
      let payload = { ...loaders, theme: state };
      dispatchToPages({
        payload,
        type,
        key,
      });
    },
    [theme, loaders, loadingTheme]
  );
  return { updateTheme, toggleThemeLoader };
}
