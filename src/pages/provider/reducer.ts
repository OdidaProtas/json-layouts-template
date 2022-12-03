export default function reducer(state = {}, action: any) {
  const { label = "", type, payload } = action;
  const keys = label.split(".");
  const interest = (state as any)[keys[0]] ?? null;
  if (keys.length === 1) return { ...state, [keys[0]]: payload };
  const data = keys.reduce((prev: any, curr: any, index: number) => {
    if (index === 0) return prev;

    if (index !== keys.length) return prev;

    let cummulative = prev;

    for (let i = 0; i < keys.length; i++) {
      if (i < keys.length) {
        if (typeof cummulative === "object") {
        }
      }
    }

    if (typeof prev === "object") {
      (prev ?? {})[curr] = payload;
      return prev;
    }
    if (/uuid-/.test(curr)) {
      const uuid = curr.split("-")[1];
      const item = (prev ?? []).find((item: any) => item.uuid === uuid);
      const index = (prev ?? []).indexOf(item);
      (prev ?? [])[index] = payload;
      return prev;
    }
    if (/id-/.test(curr)) {
      const id = curr.split("-")[1];
      return (prev ?? []).find((item: any) => item.id === id);
    }
    if (/idx-/.test(curr)) {
      return (prev ?? [])[curr];
    }
    if (/key-/.test(curr)) {
      return (prev ?? [])[curr];
    }
    if (prev !== null || prev !== undefined) return prev;
    return prev;
  }, interest);
  return { ...state, [keys[0]]: data };
}
