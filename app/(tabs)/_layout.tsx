import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { Link, Redirect, Tabs } from "expo-router";
import { theme } from "@/theme";
import { Pressable, Text } from "react-native";
import { useUserStore } from "@/store/userStore";

// const hasFinishedOnboarding = true;

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  );

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
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable style={{ marginRight: 16 }} hitSlop={20}>
                <Feather name="plus" size={26} color={theme.colorGreen} />
              </Pressable>
            </Link>
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
