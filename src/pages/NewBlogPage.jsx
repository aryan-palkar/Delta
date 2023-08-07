import { useState } from "react";

export default function NewBlogPage() {
  const [info, setInfo] = useState({
    title: "",
    body: "",
  });

  const changeHandler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const [output, setOutput] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    try {
      const response = await fetch("http://localhost:5000/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : "Bearer "  + token,
        },
        body: JSON.stringify(info),
      });
      const res = await response.text();
      setOutput(res);
    } catch (e) {
      setOutput(e);
    }
  };

  return (
    <>
      <div>NewBlogPage</div>
      <form>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={info.title}
          onChange={changeHandler}
        />
        <br />
        <label>Body:</label>
        <input
          type="text"
          name="body"
          value={info.body}
          onChange={changeHandler}
        />
        <br />
        <input type="submit" name="submit" onClick={submit} />
      </form>

      <div>
        {output && <p>{output}</p>}
        {output && <button onClick={() => setOutput("")}>X</button>}
      </div>
    </>
  );
}
