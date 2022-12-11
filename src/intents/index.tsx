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
  filter: {},
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
};

export default async function doIntent({
  clickAction: action,
  history,
  item,
  axios,
  successCb,
  errorCb,
  progressCb,
}: any) {
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
        errorCb(false);
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
        errorCb(false);
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
        errorCb(false);
        progressCb(false);
      }
    }
    return;
  }
}
