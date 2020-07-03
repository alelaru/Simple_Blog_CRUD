import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

function ShowScreen({ navigation }) {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  console.log("Aquí");
  console.log(blogPost);

  return (
    <View style={styles.blogStyle}>
      <Text style={styles.textStyle}>{blogPost.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  blogStyle: {
    height: 250,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  textStyle: {
    fontSize: 25,
  },
});

export default ShowScreen;
