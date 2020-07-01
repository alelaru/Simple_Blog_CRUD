import React from "react";

// Object responsible for the line moving information to the Bloglist
const BlogContext = React.createContext();

// This exports the element with another inside and this is an {} import
export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value={5}>{children}</BlogContext.Provider>;
};

export default BlogContext;
