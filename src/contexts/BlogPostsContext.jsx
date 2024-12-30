import { createContext, useContext, useState, useEffect } from "react";
import { getBlogPosts } from "../services/blogServices";
const BlogPostsContext = createContext();

const BlogPostsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    getBlogPosts().then((data) => {
      setBlogPosts(data);
    });
    return () => {
      setBlogPosts([]);
    };
  }, []);

  const value = {
    blogPosts,
    setBlogPosts,
    loading,
    setLoading
  };

  return (
    <BlogPostsContext.Provider value={value}>
      {children}
    </BlogPostsContext.Provider>
  );
};

const useBlogPosts = () => {
  return useContext(BlogPostsContext);
};

export { BlogPostsProvider, useBlogPosts };
