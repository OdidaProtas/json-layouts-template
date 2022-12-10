import doIntent from "../intents";

interface IUseIntent {
  clickAction?: string;
  history?: any;
}

export default function useIntent(intent: IUseIntent) {
  return async () => await doIntent(intent);
}
