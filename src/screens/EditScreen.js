import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/blogPostForm";

function EditScreen({ navigation }) {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

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

export default EditScreen;
