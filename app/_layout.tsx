import { Entypo, Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { theme } from "@/theme";
import { Text } from "react-native";

export default function Layout() {
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
