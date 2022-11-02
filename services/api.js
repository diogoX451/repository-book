import axios from "axios";

const bookApi = axios.create({
  baseURL: "https://0655-2804-14c-bb8e-4a55-2e6-5e0-dc16-85ca.sa.ngrok.io",
});

export default bookApi;
