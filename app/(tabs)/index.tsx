import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "@/theme";
import App2 from "@/components/NewUI";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>hello world!</Text>
      {/* <App2 /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    alignItems: "center",
    justifyContent: "center",
  },
});
