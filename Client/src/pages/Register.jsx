import { toast } from "react-toastify";
import { useState } from "react";
import api from "../services/api";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    try {

      const res = await api.post(
        "/auth/register",
        {
          name,
          email,
          password
        }
      );

      toast.success(res.data.message);

      setName("");
      setEmail("");
      setPassword("");

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Registration Failed"
      );

    }

  };

  return (

    <div className="hero">

      <div className="login-card">

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br /><br />

        <button onClick={handleRegister}>
          Register
        </button>

      </div>

    </div>

  );

}

export default Register;