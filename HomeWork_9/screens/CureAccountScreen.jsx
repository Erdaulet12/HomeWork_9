import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CurrentAccountScreen() {
  return (
    <View style={styles.container}>
      <Text>Здесь отображается информация о текущем счёте.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
