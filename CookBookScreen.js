import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { useRecipes } from "./components/RecipesContext";
import Card from "./components/Card";

export default function CookBookScreen() {
  const { savedRecipes } = useRecipes();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {savedRecipes.map((recipe, index) => (
        <Card key={index} user={recipe} style={styles.card} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  card: {
    marginVertical: 10,
    width: "90%",
    height: 300,
  },
});
