import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

export default function Layout() {
  return (
    <>
      <StatusBar backgroundColor="wheat" />
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </>
  );
}
