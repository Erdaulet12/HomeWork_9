import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CreditInfoScreen() {
  return (
    <View style={styles.container}>
      <Text>Здесь отображается информация о кредите.</Text>
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
