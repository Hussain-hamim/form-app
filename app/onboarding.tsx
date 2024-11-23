import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHadOnboarded);
  const router = useRouter();

  const handlePress = () => {
    toggleHasOnboarded();
    // .replace wouldn't show the go back button cuz we do not want to g back to onboarding screen
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Button title="let me in!" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
});
