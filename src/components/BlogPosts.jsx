import React, { useEffect, useState } from "react";
import { getBlogPosts, updateBlogPost } from "../services/blogServices";
import { Button } from "./ui/button";
import { useBlogPosts } from "../contexts/BlogPostsContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const { imageList, setShouldRefreshPost } = useBlogPosts();

  const handleImageChange = async (selectedImage) => {
    await updateBlogPost({ ...post, image: selectedImage });
    setShouldRefreshPost(true);

  };
  return (
    <div className="flex sm:gap-4 py-2 flex-col sm:flex-row sm:items-center items-start">
      {adminMode ? (
        <Select
          defaultValue={image}
          value={image}
          onValueChange={handleImageChange}
        >
          <SelectTrigger className="size-fit">
            <SelectValue placeholder="Select Image" />
          </SelectTrigger>
          <SelectContent>
            {imageList.map((image) => {
              return (
                <SelectItem key={image.name} value={image.url}>
                  <div>
                    <img src={image.url} className="object-contain size-28" />
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      ) : (
        <img src={image} className="object-cover w-1/3 aspect-video" />
      )}
      <h2>{title}</h2>
      <p>{content}</p>
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
