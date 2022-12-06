export const stateValueReducer = (
  previousValue: any,
  currentValue: string,
  currentIndex: number
) => {
  if (currentIndex === 0) return previousValue;
  if (typeof previousValue === "object")
    return (previousValue ?? {})[currentValue];
  if (/uuid-/.test(currentValue)) {
    const uuid = currentValue.split("-")[1];
    return (previousValue ?? []).find((item: any) => item.uuid === uuid);
  }
  if (/id-/.test(currentValue)) {
    const id = currentValue.split("-")[1];
    return (previousValue ?? []).find((item: any) => item.id === id);
  }
  if (/idx-/.test(currentValue)) {
    const index = currentValue.split("-")[1];
    return (previousValue ?? [])[index];
  }
  if (/key-/.test(currentValue)) {
    const value = currentValue.split("-")[1];
    const values = value.split(",");
    return (previousValue ?? []).find((item: any) => item[values[0]] === value);
  }
  if (previousValue !== null || previousValue !== undefined)
    return previousValue;
  return previousValue;
};
