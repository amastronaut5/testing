import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/index.js";
export default function SignUp() {
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function SubmitData(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    const username = usernameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;
    if (!username || !email || !password) {
      setError("Please fill all the fields.");
      return;
    }
    if (username.length < 3) {
      setError("Name must be at least 3 characters.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    const postData = {
      username,
      email,
      password,
    };
    try {
      // const response = await login(postData);
      setSuccess("Successfully signed up!");
      setTimeout(() => {
        setSuccess("");
        navigate("/login");
      }, 1000);
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-center mb-2">SignUp</h2>
        {error && <div className="text-red-500 text-center mb-2">{error}</div>}
        {success && <div className="text-green-600 text-center mb-2">{success}</div>}
        <input ref={usernameRef} type="text" name="name" placeholder="Name" className="border rounded-lg px-4 py-2 focus:outline-none mb-4"/>
        <input ref={emailRef} type="email" name="email" placeholder="Email" className="border rounded-lg px-4 py-2 focus:outline-none mb-4"/>
        <input ref={passwordRef} type="password" name="password" placeholder="Password" className="border rounded-lg px-4 py-2 focus:outline-none mb-4"/>
        <button onClick={SubmitData} className="bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 mt-2">
           Create Account
        </button>
      </div>
    </div>
  );
}