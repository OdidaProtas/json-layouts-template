import { useHistory } from "react-router-dom";
import doIntent from "../intents";
import { usePagesStateDisptch } from "../pages/provider";
import { useAxios } from "./useAxios";

interface IUseIntent {
  clickAction?: string;
}

export default function useIntent(intent: IUseIntent) {
  const axios = useAxios();
  const history = useHistory
  const dispatch = usePagesStateDisptch();
  return async () => await doIntent({ ...intent, axios, dispatch } as any);
}
