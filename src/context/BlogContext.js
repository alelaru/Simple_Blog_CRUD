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
      // This creates a new list of all blogs with the blog edited
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
        // if (blogPost.id == action.payload.id) {
        //   return action.payload;
        // } else {
        //   return blogPost;
        // }
      });
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
    // This is used when we scale the app if we don't send anything it wont crash
    if (callBack) {
      callBack();
    }
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callBack) => {
    dispatch({
      type: "edit_blogpost",
      payload: { id, title, content },
    });
    if (callBack) {
      callBack();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, createBlogPost, editBlogPost },
  []
);
