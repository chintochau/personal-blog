import React from "react";
import { useParams } from "react-router-dom";

const PostContentPage = () => {
  // get post/:id
  const slug = useParams();
  const { id } = slug || {};
  return <div>{id}</div>;
};

export default PostContentPage;
