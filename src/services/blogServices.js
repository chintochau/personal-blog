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