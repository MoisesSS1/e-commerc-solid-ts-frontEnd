import axios from 'axios'

const api = axios.create({
  baseURL: "https://ecomerce-backend1-b05bee7a1a0e.herokuapp.com"
})

export default api