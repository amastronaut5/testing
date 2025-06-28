"use client"

import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../api/index.js"
import { useAuth } from "../hooks/useAuth.js"

export default function Login() {
  const navigate = useNavigate()
  const usernameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const { error, success, loading, setError, setSuccess, setLoading, validateForm, resetMessages } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    resetMessages()

    const username = usernameRef.current.value.trim()
    const email = emailRef.current.value.trim()
    const password = passwordRef.current.value

    const validationError = validateForm(username, email, password)
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    try {
      // const response = await login({ username, email, password })
      setSuccess("Successfully logged in!")

      setTimeout(() => {
        navigate("/")
      }, 1000)
    } catch (error) {
      setError(error.message || "Login failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Log In</h2>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4" role="alert">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg mb-4" role="alert">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                ref={usernameRef}
                id="username"
                type="text"
                required
                placeholder="Username"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                ref={emailRef}
                id="email"
                type="email"
                required
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                ref={passwordRef}
                id="password"
                type="password"
                required
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-600 hover:underline focus:outline-none focus:underline"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
