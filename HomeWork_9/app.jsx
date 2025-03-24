import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CurrentAccountScreen from "./screens/CurrentAccountScreen";
import HelpScreen from "./screens/HelpScreen";
import TransfersScreen from "./screens/TransfersScreen";
import CreditInfoScreen from "./screens/CreditInfoScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Мой банк" }}
        />
        <Stack.Screen
          name="CurrentAccount"
          component={CurrentAccountScreen}
          options={{ title: "Текущий счёт" }}
        />
        <Stack.Screen
          name="Help"
          component={HelpScreen}
          options={{ title: "Помощь" }}
        />
        <Stack.Screen
          name="Transfers"
          component={TransfersScreen}
          options={{ title: "Переводы" }}
        />
        <Stack.Screen
          name="CreditInfo"
          component={CreditInfoScreen}
          options={{ title: "Информация о кредите" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
