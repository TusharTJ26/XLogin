import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState(false);
  const [failed, setFailed] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == "user" && pass == "password") {
      setLogin(true);
    } else {
      setFailed(true);
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      {login ? (
        <div>Welcome, user!</div>
      ) : (
        <div>
          {failed ? "Invaild Username or password" : ""}
          <br />
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              required
              placeholder="username"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <br />
            <label>Password:</label>
            <input
              required
              type="password"
              placeholder="password"
              onChange={(e) => setPass(e.target.value)}
            ></input>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
