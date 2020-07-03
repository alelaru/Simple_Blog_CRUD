import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function BlogPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <View>
      <Text style={styles.textStyle}>Enter Title:</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <Text style={styles.textStyle}>Enter Content:</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={(text) => {
          setContent(text);
        }}
      />
      <Button
        title="Save Blog Post"
        onPress={() => {
          //   createBlogPost(title, content, () => {
          //     navigation.navigate("Index");
          //   });
        }}
      ></Button>
    </View>
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

export default BlogPostForm;
