import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/blogPostForm";

function CreateScreen({ navigation }) {
  const { state, createBlogPost } = useContext(Context);

  return <BlogPostForm />;
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    marginBottom: 5,
  },
  inputStyle: {
    height: 75,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
  },
});

export default CreateScreen;
