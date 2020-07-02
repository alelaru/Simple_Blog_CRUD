import createDataContext from "./createDataContext";

// Object responsible for the line moving information to the Bloglist

const blogReducer = (state, action) => {
  switch (action.type) {
    case "addBlogPost":
      return [...state, { title: `Blod Post #${state.length + 1}` }];
    default:
      return null;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "addBlogPost" });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
