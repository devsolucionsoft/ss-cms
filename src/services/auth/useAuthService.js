import axios from "axios";
import { API_URL } from "~/src/config/constants";

const login = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useAuthService = () => {
  return {
    login,
  };
};
