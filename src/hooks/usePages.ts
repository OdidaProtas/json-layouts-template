import React from "react";
import { usePagesStateDisptch, usePagesStateValue } from "../pages/provider";
import builder from "../uidata/builder";
import landingpage from "../uidata/landingpage";
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
      updatePages([...[landingpage, builder], ...data]);
      togglePagesLoader(false);
      return;
    }
    togglePagesLoader(false);
  }

  const couldBeEmpty =
    !pages.length &&
    (loadingPages === null || loadingPages === undefined) &&
    !loadingPages;

  React.useEffect(() => {
    if (couldBeEmpty) updateAll();
  }, [couldBeEmpty]);

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
