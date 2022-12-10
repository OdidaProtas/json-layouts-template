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
    delete() {},
  },
};

export default async function doIntent({ clickAction: action, history }: any) {
  if (intents.navigate.nextPage(action)) {
    const indexOfNewLocation = 1;
    const splitActionChar = ".";
    const newLocation = (action ?? "").split(splitActionChar)[
      indexOfNewLocation
    ];
    history.push(newLocation);
  }
  if (intents.navigate.goBack(action)) {
    history.goBack();
  }
}
