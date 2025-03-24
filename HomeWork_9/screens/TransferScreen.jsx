import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TransfersScreen() {
  return (
    <View style={styles.container}>
      <Text>Здесь осуществляется перевод средств.</Text>
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
