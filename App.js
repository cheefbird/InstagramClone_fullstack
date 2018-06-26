import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Avatar from "./src/components/Avatar";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar initials={"FL"} size={35} backgroundColor={"teal"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start"
  }
});
