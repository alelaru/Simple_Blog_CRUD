import React, { useContext } from "react";
import { View, Text } from "react-native";
import BlogContext from "../context/BlogContext";
// Wire the blog-post provider

function IndexScreen() {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen {value}</Text>
    </View>
  );
}

export default IndexScreen;
