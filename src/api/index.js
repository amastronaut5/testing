import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/auth`,
  headers: {
    "Content-Type": "application/json",
  },
})

export const signup = async (userData) => {
  try {
    const response = await api.post("/signup", userData)
    return response.data
  } catch (error) {
    console.error("Signup error:", error)
    throw error.response?.data || { message: "Signup failed" }
  }
}

export const login = async (userData) => {
  try {
    const response = await api.post("/login", userData)
    return response.data
  } catch (error) {
    console.error("Login error:", error)
    throw error.response?.data || { message: "Login failed" }
  }
}
