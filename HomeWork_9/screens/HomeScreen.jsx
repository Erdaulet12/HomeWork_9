import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Текущий счёт"
        onPress={() => navigation.navigate("CurrentAccount")}
      />
      <Button title="Помощь" onPress={() => navigation.navigate("Help")} />
      <Button
        title="Переводы"
        onPress={() => navigation.navigate("Transfers")}
      />
      <Button
        title="Информация о кредите"
        onPress={() => navigation.navigate("CreditInfo")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 20,
  },
});
