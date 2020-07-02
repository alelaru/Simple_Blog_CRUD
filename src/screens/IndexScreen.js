import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { FlatList } from "react-native-gesture-handler";
// Wire the blog-post provider

function IndexScreen() {
  //   const blogPosts = useContext(BlogContext);

  const { state, addBlogPost } = useContext(Context);
  console.log(state);
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost}></Button>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}

export default IndexScreen;
