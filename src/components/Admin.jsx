import React from "react";
import { Button } from "./ui/button";
import { createBlogPost, getBlogPosts } from "../services/blogServices";
import BlogPosts from "./BlogPosts";
const password = import.meta.env.VITE_ADMIN_PASSWORD;

const samplePostData = {
  title: "Sample Post",
  slug: "sample-post-2",
  content: "This is a sample post",
  author: "Jason Chau",
};

const Admin = () => {
  return (
    <div>
      <Button onClick={() => createBlogPost(samplePostData)}>
        Create Sample Post
      </Button>
      <BlogPosts adminMode/>
    </div>
  );
};

export default Admin;
