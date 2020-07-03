import createDataContext from "./createDataContext";

// Object responsible for the line moving information to the Bloglist

const blogReducer = (state, action) => {
  switch (action.type) {
    case "delete_blogpost":
      // This creates a new list of all blogs
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "addBlogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: `Blod Post #${state.length + 1}`,
        },
      ];
    default:
      return null;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "addBlogPost" });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
