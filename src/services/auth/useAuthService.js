import axios from "axios";

const URL = "https://api-atila.solucionsoft.com/v1/auth/login";

const login = async (data) => {
  try {
    const response = await axios.post(URL, {
      username: "atila",
      password: "12345678",
    });
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
