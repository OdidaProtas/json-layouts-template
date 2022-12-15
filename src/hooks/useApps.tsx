import React from "react";
import { usePagesStateDisptch, usePagesStateValue } from "../pages/provider";
import appPagesNotCreatedFallback from "../uidata/app-pages-not-created-fallback";
import { useAxios } from "./useAxios";

export default function useApps() {
  const apps = usePagesStateValue("apps") ?? appPagesNotCreatedFallback;

  const loadingApps = usePagesStateValue("loaders.apps");

  const { updateApps, toggleAppsLoader } = useActions();
  const axios = useAxios();

  async function updateAll() {
    try {
      toggleAppsLoader(true);
      const response = await axios.get("/a");
      const data = response.data;
      if (data) {
        updateApps(data);
        toggleAppsLoader(false);
        return;
      }
      toggleAppsLoader(false);
    } catch (e) {
      toggleAppsLoader(false);
    }
  }

  const couldBeEmpty =
    !apps.length &&
    (loadingApps === null || loadingApps === undefined) &&
    !loadingApps;

  React.useEffect(() => {
    if (couldBeEmpty) updateAll();
  }, [couldBeEmpty]);

  return apps;
}

function useActions() {
  const dispatchToPages = usePagesStateDisptch();
  const apps = usePagesStateValue("apps");
  const loaders = usePagesStateValue("loaders");
  const loadingApps = usePagesStateValue("loaders.apps");
  const updateApps = React.useCallback(
    (payload:any) => {
      const type = "update_all";
      const key = "apps";
      dispatchToPages({ payload, type, key });
    },
    [apps]
  );

  const toggleAppsLoader = React.useCallback(
    (state: boolean) => {
      const type = "update_all";
      const key = "loaders";
      let payload = { ...loaders, apps: state };
      dispatchToPages({
        payload,
        type,
        key,
      });
    },
    [apps, loaders, loadingApps]
  );
  return { updateApps, toggleAppsLoader };
}
