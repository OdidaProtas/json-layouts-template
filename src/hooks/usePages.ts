import React from "react";
import { usePagesStateDisptch, usePagesStateValue } from "../pages/provider";
import appForm from "../uidata/stilldre";
import appList from "../uidata/app-list";
import { useAxios } from "./useAxios";

export default function usePages() {
  const pages = usePagesStateValue("pages");
  const appId = usePagesStateValue("appId");

  const loadingPages = usePagesStateValue("loaders.pages");

  const { updatePages, togglePagesLoader } = useActions();
  const axios = useAxios();

  async function updateAll() {
    togglePagesLoader(true);
    try {
      const response = await axios.get(`/page/${appId}`);
      const data = response.data;
      if (data) {
        updatePages(
          [appList, appForm]
        );
        togglePagesLoader(false);
        return;
      }
      togglePagesLoader(false);
    } catch (e) {
      console.error(e);
      togglePagesLoader(false);
    }
  }

  const couldBeEmpty = !pages.length && !loadingPages;

  React.useEffect(() => {
    if (couldBeEmpty ) updateAll();
  }, [couldBeEmpty, appId]);

  return [...pages];
}

function useActions() {
  const dispatchToPages = usePagesStateDisptch();
  const pages = usePagesStateValue("pages");
  const loaders = usePagesStateValue("loaders");
  const loadingPages = usePagesStateValue("loaders.pages");
  const updatePages = React.useCallback(
    (payload: any[]) => {
      const type = "update_all";
      const key = "pages";
      dispatchToPages({ payload, type, key });
    },
    [pages]
  );

  const togglePagesLoader = React.useCallback(
    (state: boolean) => {
      const type = "update_all";
      const key = "loaders";
      let payload = { ...loaders, pages: state };
      dispatchToPages({
        payload,
        type,
        key,
      });
    },
    [pages, loaders, loadingPages]
  );
  return { updatePages, togglePagesLoader };
}
