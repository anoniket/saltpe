import React, { useState, useEffect } from "react";
import "../Styles/Login.css";
import Login from "./Login";

function Signup() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className="ufield"
        name="name"
        placeholder="name"
      />
      <input
        type="email"
        value={email}
        onChange={handleChange}
        className="ufield"
        name="email"
        placeholder="email"
      />
      <input
        type="text"
        value={username}
        onChange={handleChange}
        className="ufield"
        name="username"
        placeholder="username"
      />

      <input
        type="password"
        value={password}
        onChange={handleChange}
        className="ufield"
        name="password"
        placeholder="password"
      />
    </div>
  );
}

export default Signup;
