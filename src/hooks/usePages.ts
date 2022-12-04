import React from "react";
import { usePagesStateDisptch, usePagesStateValue } from "../pages/provider";
import { useAxios } from "./useAxios";

export default function usePages() {
  const pages = usePagesStateValue("pages");
  const loadingPages = usePagesStateValue("loaders.pages");

  const { updatePages, togglePagesLoader } = useActions();
  const axios = useAxios();

  async function updateAll() {
    togglePagesLoader(true);
    const response = await axios.get("/pages");
    const data = response.data;
    if (data) {
      updatePages(data);
      togglePagesLoader(false);
      return;
    }
    togglePagesLoader(false);
  }

  React.useEffect(() => {
    const couldBeEmpty =
      !pages.length &&
      (loadingPages === null || loadingPages === undefined) &&
      !loadingPages;
    if (couldBeEmpty) updateAll();
  }, []);

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
