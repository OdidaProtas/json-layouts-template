export const intents = {
  navigate: {
    nextPage(action: string) {
      return /navigate_next_page./.test(action);
    },
    goBack(action: string) {
      return /navigate_previous./.test(action);
    },
    navigateToDetail(action: string) {
      return /navigate_detail_page./.test(action);
    },
    navigateEdit(action: string) {
      return /navigate_edit_page./.test(action);
    },
  },
  feedback: {
    showToast(action: string) {
      return /show_toast./.test(action);
    },
    hideToast(action: string) {
      return /hide_toast./.test(action);
    },
    showDialog(action: string) {
      return /show_toast./.test(action);
    },
    hideDialog(action: string) {
      return /hide_toast./.test(action);
    },
    showSpinner(action: string) {
      return /show_toast./.test(action);
    },
    hideSpinner(action: string) {
      return /hide_toast./.test(action);
    },
  },
  filter: {
    sort(action: string) {
      return /sort./.test(action);
    },
    search(action: string) {
      return /search./.test(action);
    },
    filterBy(action: string) {
      return /filter_by./.test(action);
    },
  },
  crud: {
    delete(action: string) {
      return /delete_record./.test(action);
    },
    save(action: string) {
      return /save_record./.test(action);
    },
    update(action: string) {
      return /update_record./.test(action);
    },
  },
  state: {
    updateStateValue(action: string) {
      return /update_state_value/.test(action);
    },
  },
};

interface IDoIntent {
  clickAction: string;
  history: any;
  item: any;
  axios: any;
  successCb: any;
  errorCb: any;
  progressCb: any;
  dispatch: Function;
}

export default async function doIntent({
  clickAction: action,
  history,
  item,
  axios,
  successCb,
  errorCb,
  progressCb,
  dispatch,
}: IDoIntent) {
  if (intents.navigate.nextPage(action)) {
    const indexOfNewLocation = 1;
    const splitActionChar = ".";
    const newLocation = (action ?? "").split(splitActionChar)[
      indexOfNewLocation
    ];
    history.push(newLocation);
    return;
  }
  if (intents.navigate.goBack(action)) {
    history.goBack();
    return;
  }
  if (intents.crud.delete(action)) {
    const { itemId, referenceTable } = item;
    try {
      if (progressCb) {
        progressCb(true);
      }
      const response = axios.delete(`/${referenceTable}/${itemId}`);
      if (successCb) {
        successCb(response.data);
        progressCb(false);
      }
    } catch (e) {
      if (errorCb) {
        errorCb(e);
        progressCb(false);
      }
    }
    return;
  }
  if (intents.crud.save(action)) {
    const { referenceTable } = item;
    try {
      if (progressCb) {
        progressCb(true);
      }
      const response = axios.post(`/${referenceTable}`, { ...item });
      if (successCb) {
        successCb(response.data);
        progressCb(false);
      }
    } catch (e) {
      if (errorCb) {
        errorCb(e);
        progressCb(false);
      }
    }
    return;
  }
  if (intents.crud.update(action)) {
    const { itemId, referenceTable } = item;
    try {
      if (progressCb) {
        progressCb(true);
      }
      const response = axios.put(`/${referenceTable}/${itemId}`);
      if (successCb) {
        successCb(response.data);
        progressCb(false);
      }
    } catch (e) {
      if (errorCb) {
        errorCb(e);
        progressCb(false);
      }
    }
    return;
  }
  if (intents.state.updateStateValue(action)) {
    const intentExtras = action.split("-");
    const key = intentExtras[1];
    let value;
    try {
      value = JSON.parse(intentExtras[2]);
    } catch (e) {
      value = intentExtras[2];
    }
    const type = "update_all";
    dispatch({
      type,
      key,
      payload: value,
    });
  }
}
