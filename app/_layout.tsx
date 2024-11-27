import { Stack } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";
// import * as QuickAction from "expo-quick-actions";
// import { useQuickActionRouting } from "expo-quick-actions/router";

// SplashScreen.preventAutoHideAsync();

export default function Layout() {
  // useQuickActionRouting();
  // useEffect(() => {
  //   QuickAction.setItems([
  //     {
  //       title: "Add a plant",
  //       icon: "leaf",
  //       id: "0",
  //       params: { href: "/new" },
  //     },
  //   ]);
  // }, []);

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="onboarding"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="new"
        options={{
          presentation: "modal",
          title: "New Plant",
          gestureDirection: "vertical",
        }}
      />
    </Stack>
  );
}
