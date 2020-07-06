import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogsPostForm from "../components/BlogsPostForm";

function EditScreen({ navigation }) {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);
  console.log(navigation);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <BlogsPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        console.log(title, content);
        editBlogPost(id, title, content, () => navigation.pop());
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

export default EditScreen;
