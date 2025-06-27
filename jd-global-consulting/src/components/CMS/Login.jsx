import React, { useState } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = ({ onAuth }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const HARD_USERNAME = "admin";
  const HARD_PASS_HASH =
    "$2b$10$I5jubPdPgYtlPd8yXZ58rOPjFEGjEYzupZ4g5HEZkFm1afnlwHiJm";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user !== HARD_USERNAME) {
      setError("Niepoprawny login");
      return;
    }
    const ok = await bcrypt.compare(pass, HARD_PASS_HASH);
    if (!ok) {
      setError("Niepoprawne hasło");
      return;
    }
    setError("");
    onAuth();
    navigate("/cms");
  };

  return (
    <div className="login-page">
      <div className="login-logo">
        <img src="/logo JD global.png" alt="JD Global Consulting" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Logowanie do CMS</h2>
        <input
          type="text"
          placeholder="Login"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Hasło"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        {error && <div className="login-error">{error}</div>}
        <button type="submit" className="btn btn-primary">
          Zaloguj się
        </button>
      </form>
    </div>
  );
};

export default Login;
