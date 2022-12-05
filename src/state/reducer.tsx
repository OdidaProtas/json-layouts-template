export default function reducer(state = {}, action: any) {
    const { key = "", type, payload } = action;
    switch (type) {
      case "update_all": {
        return { ...state, [key]: payload };
      }
      default: {
        return { ...state };
      }
    }
  }
  