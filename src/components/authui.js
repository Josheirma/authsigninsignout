// src/components/AuthUI.js
import { useState } from "react";
import { signInWithEmail, signInWithGoogle, signUpWithEmail } from "../utils/auth";

export default function AuthUI() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmail(email, password);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSignup = async () => {
    try {
      await signUpWithEmail(email, password);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
      <button onClick={handleSignup} className="bg-green-500 text-white p-2 rounded">
        Sign Up
      </button>
      <button onClick={handleGoogleLogin} className="bg-red-500 text-white p-2 rounded">
        Sign in with Google
      </button>
    </div>
  );
}
