import React, { useEffect, useState } from "react";
import { getBlogPosts } from "../services/blogServices";
import { Button } from "./ui/button";
import { useBlogPosts } from "../contexts/BlogPostsContext";
const BlogPosts = ({ adminMode }) => {
  const { blogPosts } = useBlogPosts();
  return (
    <div className="container mx-auto mt-8 flex-col flex">
      {blogPosts.map((post) => {
        return <Post key={post._id} post={post} adminMode={adminMode} />;
      })}
    </div>
  );
};

const Post = ({ post, adminMode }) => {
  const { title, content, image } = post || {};
  return (
    <div className="flex sm:gap-4 py-2 flex-col sm:flex-row sm:items-center items-start">
      <h2>{title}</h2>
      <p>{content}</p>
      {image && <img src={image} alt={title} />}
      {adminMode && (
        <>
          <Button onClick={() => {}} variant="link">
            Edit
          </Button>
          <Button onClick={() => {}} variant="link" className="text-red-500">
            Delete
          </Button>
        </>
      )}
    </div>
  );
};

export default BlogPosts;
