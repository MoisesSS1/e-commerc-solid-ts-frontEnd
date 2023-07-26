import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000" || process.env.REACT_APP_API_URL
})

export default api