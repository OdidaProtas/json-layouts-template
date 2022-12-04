import axios from "axios";
import { PAGES_URL } from "../constants";

export const useAxios = () => {
  return axios.create({
    baseURL: PAGES_URL,
    timeout: 5000,
  });
};
