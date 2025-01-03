import { createContext, useContext, useState, useEffect } from "react";
import { getAllFiles, getBlogPosts } from "../services/blogServices";
const BlogPostsContext = createContext();

const BlogPostsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(true);
  const [shouldRefreshPost, setShouldRefreshPost] = useState(true);

  useEffect(() => {
    if (shouldRefreshPost) {
      getBlogPosts().then((data) => {
        setBlogPosts(data);
      });
      setShouldRefreshPost(false);
    }
  }, [shouldRefreshPost]);

  useEffect(() => {
    if (fileList.length === 0 || shouldRefresh) {
      getAllFiles().then((data) => {
        setFileList(data.files);
      });
      setShouldRefresh(false);
    }
  }, [fileList, shouldRefresh]);

  const imageList = fileList.filter((file) => file.name.endsWith( ".jpg") || file.name.endsWith( ".png"));

  const value = {
    blogPosts,
    setBlogPosts,
    loading,
    setLoading,
    fileList,
    setFileList,
    setShouldRefresh,
    imageList,
    shouldRefreshPost,
    setShouldRefreshPost
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
