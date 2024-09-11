import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data.json";

const PostViewPage = () => {
  const navigate = useNavigate();
  // const parmeter = useParams();
  // console.log(parmeter);
  const { postNum } = useParams();
  const post = data.find((item) => item.id == postNum);
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.content}</div>
    </div>
  );
};

export default PostViewPage;
