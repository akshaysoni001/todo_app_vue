import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8888",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getProjects() {
    return apiClient.get("/todoapp");
  },
  postProject(payload) {
    console.log("Pay", payload);
    return apiClient.post("/todoapp", payload);
  },
};
