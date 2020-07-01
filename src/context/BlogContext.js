import React, { useState } from "react";

// Object responsible for the line moving information to the Bloglist
const BlogContext = React.createContext();

// This exports the element with another inside and this is an {} import
export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  //   Function to add a new array to the blogPosts
  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
