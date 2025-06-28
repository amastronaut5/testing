"use client"

import { useState } from "react"

export const useAuth = () => {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateForm = (username, email, password) => {
    if (!username || !email || !password) {
      return "Please fill all the fields."
    }
    if (username.length < 3) {
      return "Name must be at least 3 characters."
    }
    if (!validateEmail(email)) {
      return "Please enter a valid email address."
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters."
    }
    return null
  }

  const resetMessages = () => {
    setError("")
    setSuccess("")
  }

  return {
    error,
    success,
    loading,
    setError,
    setSuccess,
    setLoading,
    validateForm,
    resetMessages,
  }
}
