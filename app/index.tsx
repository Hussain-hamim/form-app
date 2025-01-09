import { Link, router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function App() {
  const onNext = () => {
    router.push("/checkout");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen />

      <Text>Home screen</Text>

      <CustomButton onPress={onNext} title="Checkout" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
