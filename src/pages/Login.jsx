import React, { useState } from "react";

const Login = () => {
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });

  const [output, setOutput] = useState("")

  const changeHandler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password,
      }),
    });

    const data = await response.json();
    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
       // redirect to dashboard or protected route
      setOutput("Login Successful")
    } else {
      setOutput(data.message);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={info.username} onChange={changeHandler} />
        <br/>
        <label>Password:</label>
        <input type="password" name="password" value={info.password} onChange={changeHandler} />
        <br/>
        <button type="submit">Login</button>
    </form>

    <div>
    {output && <p>{output}</p>}
    {output && <button onClick={() => setOutput("")}>X</button>}
    </div>
    </>
  );
};

export default Login;
