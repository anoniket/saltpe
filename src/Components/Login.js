import React, { useState, useEffect } from "react";
import "../Styles/Login.css";
import Signup from "./Signup";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  //   const classes = useStyles();
  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="mlogin">
      <div>
        welcome <span style={{ color: "#e5e5e5" }}> {username}</span>
      </div>

      <div className="lform">
        {showSignup ? (
          <Signup />
        ) : (
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
        )}

        <div className="btflex">
          <button
            onClick={() => {
              setShowSignup(false);
            }}
            className="custB"
            style={{ marginBottom: 20 }}
          >
            login
          </button>
          <button
            className="custB2"
            onClick={() => {
              setShowSignup(true);
            }}
          >
            signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
