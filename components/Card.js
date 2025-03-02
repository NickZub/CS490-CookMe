import React from "react";
import FlipCard from "react-native-flip-card";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  Linking,
} from "react-native";

export function Card(props) {
  const [shareAs, label, image, ingredientLines, url] = props.user;

  const handleButtonClick = () => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <FlipCard flipVertical>
      {/* Face Side */}
      <View style={styles.frontCard}>
        <ImageBackground source={{ uri: image }} style={styles.image}>
          <View style={styles.cardText}>
            <Text style={styles.name}>{label}</Text>
          </View>
        </ImageBackground>
      </View>
      {/* Back Side */}
      <View style={styles.backCard}>
        {ingredientLines.map((ingredient) => (
          <Text key={ingredient} style={styles.ingredients}>
            {ingredient}
          </Text>
        ))}
        {/* Button to navigate to recipe URL */}
        <Button title="View Recipe" onPress={handleButtonClick} />
      </View>
    </FlipCard>
  );
}

export default Card;

const styles = StyleSheet.create({
  frontCard: {
    width: 355,
    height: 525,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    backgroundColor: "#DFDFDF",
    marginTop: 20,
  },
  backCard: {
    width: 355,
    height: 525,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    backgroundColor: "#243119",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 30,
    overflow: "hidden",
    justifyContent: "flex-end",
    opacity: 1.75,
  },
  cardText: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  ingredients: {
    fontSize: 18,
    color: "#E6E1C5",
    lineHeight: 22,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
});
