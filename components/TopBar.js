import React from "react";
import { View, Text, StyleSheet, Image } from "react-native"; // Removed TouchableOpacity
import { useNavigation } from "@react-navigation/native";

export default function TopBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/wooden-spoon.jpg")}
        style={styles.spoonImage}
      />
      <Text style={styles.appName}>CookMe</Text>
      <Image
        source={require("../assets/wooden-fork.jpg")}
        style={styles.forkImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
    // height: 100,
  },
  appName: {
    color: 'rgba(207, 14, 14, 0.78)',
    fontSize: 40,
    textAlign: "center",
  },
  spoonImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginLeft: 55,
    marginTop: 10,
    backgroundColor: "#9CAFB7"
  },
  forkImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginTop: 8
  }
});
