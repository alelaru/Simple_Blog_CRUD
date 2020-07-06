import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

// Object responsible for the line moving information to the Bloglist

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogpost":
      // We didnt do anything because we will assume that the api is correct
      return action.payload;
    case "delete_blogpost":
      // This creates a new list of all blogs
      return state.filter((blogPost) => blogPost.id !== action.payload);
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

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogPost/${id}`);
    // We use the dispatch because it will re-render the index
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogPost");
    // response.data = blogPost array []

    dispatch({ type: "get_blogpost", payload: response.data });
  };
};

const createBlogPost = (dispatch) => {
  return async (title, content, callBack) => {
    await jsonServer.post("/blogPost", { title, content });
    //   dispatch({
    //     type: "create_blogpost",
    //     payload: { title: title, content: content },
    //   });
    //   // This is used when we scale the app if we don't send anything it wont crash
    if (callBack) {
      callBack();
    }
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callBack) => {
    await jsonServer.put(`/blogPost/${id}`, { title, content });
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
  { deleteBlogPost, createBlogPost, editBlogPost, getBlogPost },
  []
);
