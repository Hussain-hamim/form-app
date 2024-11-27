import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { Link, Redirect, SplashScreen, Tabs } from "expo-router";
import { theme } from "@/theme";
import { Pressable, Text } from "react-native";
import { useUserStore } from "@/store/userStore";
import { StatusBar } from "expo-status-bar";

// const hasFinishedOnboarding = true;

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  // SplashScreen.hideAsync();

  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  );

  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
        <Tabs.Screen
          name="(home)"
          options={{
            title: "Home",
            // tabBarShowLabel: false,
            headerShown: false,
            tabBarLabel({ focused, color }) {
              return <Text>{focused ? "Home" : ""}</Text>;
            },
            tabBarIcon: ({ color, size }) => (
              <Entypo name="leaf" color={color} size={size} />
            ),
            // headerRight: () => (
            //   <Link href="/new" asChild>
            //     <Pressable style={{ marginRight: 16 }} hitSlop={20}>
            //       <Feather name="plus" size={26} color={theme.colorGreen} />
            //     </Pressable>
            //   </Link>
            // ),
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
    </>
  );
}

// until you know
// why you're going
// to use something,
// don't use it

// the higher we go for something the harder we fall. ~HH
