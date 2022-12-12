import doIntent from "../intents";
import { usePagesStateDisptch } from "../pages/provider";
import { useAxios } from "./useAxios";

interface IUseIntent {
  clickAction?: string;
  history?: any;
  axios?: any;
}

export default function useIntent(intent: IUseIntent) {
  const axios = useAxios();
  const dispatch = usePagesStateDisptch();
  return async () => await doIntent({ ...intent, axios, dispatch } as any);
}
