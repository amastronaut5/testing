import { useRef } from "react";
export default function Login() {
    const usernameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-center mb-2">Log In</h2>
        <input onChange={inputText} ref={usernameRef} type="text" name="name" placeholder="Name" className="border rounded-lg px-4 py-2 focus:outline-none mb-4"/>
        <input onChange={inputText} ref={emailRef} type="email" name="email" placeholder="Email" className="border rounded-lg px-4 py-2 focus:outline-none mb-4"/>
        <input onChange={inputText} ref={passwordRef} type="password" name="password" placeholder="Password" className="border rounded-lg px-4 py-2 focus:outline-none mb-4"/>
        <button className="bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 mt-2">
            Log IN
        </button>
      </div>
    </div>
  );
}