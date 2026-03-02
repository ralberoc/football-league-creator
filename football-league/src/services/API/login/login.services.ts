import axios from "axios";

export function authenticate(request: { userName: string; password: string }) {
  return axios.post("/login", request);
}
