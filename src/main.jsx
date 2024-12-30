import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { BlogPostsProvider } from "./contexts/BlogPostsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BlogPostsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BlogPostsProvider>
  </StrictMode>
);
