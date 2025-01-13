import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";

export default function RealPost() {
  // https://jsonplaceholder.typicode.com/posts
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    console.log(res.data);
    setPosts(res.data.slice(0, 10));
  };

  // useEffect의 콜백에는 async를 사용할 수 없음
  // > async await를 사용하는 함수를 따로 만들어야 함
  useEffect(() => {
    // getPost();
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data.slice(0, 5));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <h6>여기는 RealPost</h6>
      {posts.length === 0 ? (
        <span>...loading</span>
      ) : (
        posts.map((post) => {
          return (
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })
      )}
    </>
  );
}
