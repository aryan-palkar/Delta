import { useState, useEffect } from "react";

export default function Home() {
  const [post, setPost] = useState([]);

  const fetching = async function () {
    try {
      const response = await fetch("http://localhost:5000/blog");
      const data = await response.json();
      setPost(data.blogs);
    } catch (e) {
      console.log(e);
    }
  };

  const likeHandler = async (blogId) => {
    // console.log(item)
    const token = localStorage.getItem("accessToken");
    try {
      const response = await fetch("http://localhost:5000/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ blogId: blogId }),
      });
      const data = await response.json();
      const currBlog = data.blog;
      const updatedBlog = post.map((item) => {
        if (item._id === currBlog._id) {
          return currBlog;
        } else {
          return item;
        }
      });
      setPost(updatedBlog);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <>
      {post.map((item, index) => {
        console.log(item);
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <button
              onClick={() => {
                likeHandler(item._id);
              }}
            >
              {item.likes.length}
            </button>
          </div>
        );
      })}
    </>
  );
}
