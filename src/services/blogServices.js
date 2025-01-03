const api = import.meta.env.VITE_SERVER;

export const getBlogPosts = async () => {
  const response = await fetch(`${api}/blog/getBlogPost`);
  const data = await response.json();
  return data;
};

export const createBlogPost = async (data) => {
  const response = await fetch(`${api}/blog/createBlogPost`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

export const uploadBlogFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch(`${api}/blog/uploadBlogFile`, {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  console.log(result);

  return result;
};

export const updateBlogPost = async (data) => {
  const response = await fetch(`${api}/blog/updateBlogPost`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

export const getAllFiles = async () => {
  const response = await fetch(`${api}/blog/getAllFiles`);
  const data = await response.json();
  return data;
};

export const deleteFile = async (fileName) => {
  const response = await fetch(`${api}/blog/deleteFile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fileName }),
  });
  const result = await response.json();
  return result;
};
