import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogsPostForm from "../components/BlogsPostForm";

function CreateScreen({ navigation }) {
  const { state, createBlogPost } = useContext(Context);

  return (
    <BlogsPostForm
      label="Create Title"
      onSubmit={(title, content) => {
        createBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
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
