import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://project2-api.vercel.app/",
  development: "https://project2-api.vercel.app/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
