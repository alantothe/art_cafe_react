import api from "./apiConfig.js";

export const getArt = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Error: Getting all Art", error);
  }
};

export const getArtist = async (artist) => {
  try {
    const response = await api.get(`/artist/${artist}`);
    return response.data;
  } catch (error) {
    console.error("Error: Getting Artist", error);
  }
};
export const getArtByID = async (imageId) => {
  try {
    const response = await api.get(`/id/${imageId}`);
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error: Getting Art", error);
  }
};

export const deleteArtWork = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createArt = async (artData) => {
  try {
    const response = await api.post("/", artData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateArt = async (id, artData) => {
  try {
    const response = await api.put(`/${id}`, artData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
