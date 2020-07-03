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
          title: `Blog Post #${state.length + 1}`,
          content: "Randon Characters",
        },
      ];
    case "create_blogpost":
      // This creates a new list of all blogs
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "edit_blogpost":
      // This creates a new list of all blogs
      return null;
    // return state.filter((blogPost) => blogPost.id !== action.payload);
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

const createBlogPost = (dispatch) => {
  return (title, content, callBack) => {
    dispatch({
      type: "create_blogpost",
      payload: { title: title, content: content },
    });
    callBack();
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content) => {
    dispatch({
      type: "edit_blogpost",
      payload: { id: id, title: title, content: content },
    });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, createBlogPost },
  []
);
