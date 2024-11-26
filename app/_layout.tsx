import { Stack } from "expo-router";
import { StatusBar, Text } from "react-native";
import "./../global.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar
        backgroundColor="#f3fcfc"
        barStyle="dark-content"
        hidden={false}
      />
      <Stack
        screenOptions={{
          animation: "ios_from_left",
          headerShown: false,
          animationDuration: 1,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="listing/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
