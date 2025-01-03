import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  createBlogPost,
  getBlogPosts,
  uploadBlogFile,
  getAllFiles,
} from "../services/blogServices";
import BlogPosts from "./BlogPosts";
import { useBlogPosts } from "../contexts/BlogPostsContext";
import CDNFiles from "./admin-page/CDNFiles";
const password = import.meta.env.VITE_ADMIN_PASSWORD;

const samplePostData = {
  title: "Sample Post",
  slug: "sample-post-2",
  content: "This is a sample post",
  author: "Jason Chau",
};

const Admin = () => {
  const [file, setFile] = useState(null);
  const { fileList } = useBlogPosts();

  return (
    <div>
      <Button onClick={() => createBlogPost(samplePostData)}>
        Create Sample Post
      </Button>

      <BlogPosts adminMode />
      <CDNFiles />
    </div>
  );
};

export default Admin;
