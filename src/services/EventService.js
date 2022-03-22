import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://localhost:8888',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getProjects() {
    return apiClient.get('/todoapp')
  },
  postProject(){
    return apiClient.post('/todoapp')
  }
}
