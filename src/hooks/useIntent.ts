import doIntent from "../intents";

export default function useIntent(intent: string) {
  return async (state: any) => await doIntent(intent);
}
