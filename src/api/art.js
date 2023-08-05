import api from "./apiConfig.js";

export const getArt = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Error: Getting all Art", error);
  }
};
