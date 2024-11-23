import { Entypo, Feather } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { theme } from "@/theme";
import { Text } from "react-native";

const hasFinishedOnboarding = true;

export default function Layout() {
  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // tabBarShowLabel: false,
          tabBarLabel({ focused, color }) {
            return <Text>{focused ? "Home" : ""}</Text>;
          },
          tabBarIcon: ({ color, size }) => (
            <Entypo name="leaf" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          // tabBarShowLabel: false,
          tabBarLabel({ focused, color }) {
            return <Text>{focused ? "Profile" : ""}</Text>;
          },
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

// until you know
// why you're going
// to use something,
// don't use it

// the higher we go for something the harder we fall. ~HH
