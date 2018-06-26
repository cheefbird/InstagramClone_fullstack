import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Constants } from "expo";

import AuthorRow from "./src/components/AuthorRow";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AuthorRow
          fullName={"First Last"}
          linkText={"Comments"}
          onPressLinkText={() => {
            console.log("LINK PRESSED!!!!!");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff"
  }
});
