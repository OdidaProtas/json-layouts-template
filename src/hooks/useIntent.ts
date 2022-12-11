import doIntent from "../intents";
import { useAxios } from "./useAxios";

interface IUseIntent {
  clickAction?: string;
  history?: any;
  axios?: any;
}

export default function useIntent(intent: IUseIntent) {
  const axios = useAxios();
  return async () => await doIntent({ ...intent, axios } as any);
}
