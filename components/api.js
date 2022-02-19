import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const SESSION_ID = "bbc3ea41548fcc022b99824789627b4c3d534051";
const BASE_URL = "https://api.themoviedb.org/3";

export const api = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY, session_id: SESSION_ID},
});
