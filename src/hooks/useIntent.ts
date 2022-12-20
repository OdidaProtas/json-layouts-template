import { useNavigate } from "react-router-dom";
import doIntent from "../intents";
import { usePagesStateDisptch } from "../pages/provider";
import { useAxios } from "./useAxios";

interface IUseIntent {
  clickAction?: string;
}

export default function useIntent(intent: IUseIntent) {
  const axios = useAxios();
  const history = useNavigate()
  const dispatch = usePagesStateDisptch();
  return async () => await doIntent({ ...intent, axios, dispatch } as any);
}
