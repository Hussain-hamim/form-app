// import { Entypo, Feather } from "@expo/vector-icons";
// import { Tabs } from "expo-router";
// import { theme } from "@/theme";
// import { Text } from "react-native";

// export default function Layout() {
//   return (
//     <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           // tabBarShowLabel: false,
//           tabBarLabel({ focused, color }) {
//             return <Text>{focused ? "Home" : ""}</Text>;
//           },
//           tabBarIcon: ({ color, size }) => (
//             <Entypo name="leaf" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           // tabBarShowLabel: false,
//           tabBarLabel({ focused, color }) {
//             return <Text>{focused ? "Profile" : ""}</Text>;
//           },
//           tabBarIcon: ({ color, size }) => (
//             <Feather name="user" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// // until you know
// // why you're going
// // to use something,
// // don't use it

// // the higher we go for something the harder we fall. ~HH

////////////////////////////////////////

import React from "react";
import { Tabs } from "expo-router";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.customButton}
    onPress={onPress}
    activeOpacity={0.7}
  >
    {children}
  </TouchableOpacity>
);

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "index") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "explore") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "orders") {
            iconName = focused ? "basket" : "basket-outline";
          } else if (route.name === "chat") {
            iconName = focused ? "chatbubble" : "chatbubble-outline";
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="explore" />
      <Tabs.Screen
        name="add"
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}>
              <View style={styles.addButton}>
                <Ionicons name="add" size={30} color="white" />
              </View>
            </CustomTabBarButton>
          ),
        }}
      />
      <Tabs.Screen name="orders" />
      <Tabs.Screen name="chat" />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#fff",
    elevation: 5,
  },
  customButton: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});
