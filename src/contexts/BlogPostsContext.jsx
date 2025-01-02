import { createContext, useContext, useState, useEffect } from "react";
import { getAllFiles, getBlogPosts } from "../services/blogServices";
const BlogPostsContext = createContext();

const BlogPostsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    getBlogPosts().then((data) => {
      setBlogPosts(data);
    });
    return () => {
      setBlogPosts([]);
    };
  }, []);

    useEffect(() => {
      if (fileList.length === 0) {
        getAllFiles().then((data) => {
          console.log(data.files);
          setFileList(data.files);
        });
      }
    }, [fileList]);

  const value = {
    blogPosts,
    setBlogPosts,
    loading,
    setLoading,
    fileList,
    setFileList
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
