import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Constants } from "expo";

// import AuthorRow from "./src/components/AuthorRow";
import CardList from "./src/components/CardList";

const items = [
  { id: 0, author: "Bob Ross" },
  { id: 1, author: "Chuck Norris" }
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardList items={items} />
      </View>
    );
  }

  /*
  render() {
    return (
      <View style={styles.container}>
        <Card
          fullName={"First Last"}
          linkText={"Comments"}
          onPressLinkText={() => {
            console.log("LINK PRESSED!!!!!");
          }}
          image={{ uri: "https://unsplash.it/600/600" }}
        />
      </View>
    );
  }
  */
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff"
  }
});
