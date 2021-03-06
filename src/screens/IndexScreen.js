import React, { useContext, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// Wire the blog-post provider

const IndexScreen = ({ navigation }) => {
  //   const blogPosts = useContext(BlogContext);

  const { state, deleteBlogPost, getBlogPost } = useContext(Context);

  useEffect(() => {
    getBlogPost();

    const listener = navigation.addListener("didFocus", () => {
      getBlogPost();
      // Clean listeners
      return () => {
        listener.remove();
      };
    });
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.blogStyle}>
                <Text style={styles.textStyle}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    deleteBlogPost(item.id);
                  }}
                >
                  <FontAwesome name="trash" style={styles.iconStyle} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <AntDesign
          name="plus"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  blogStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  textStyle: {
    fontSize: 18,
  },
  iconStyle: {
    color: "black",
    fontSize: 24,
    marginRight: 10,
  },
  iconStyle: {
    marginRight: 10,
  },
});

export default IndexScreen;
