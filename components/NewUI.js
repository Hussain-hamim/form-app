import { Entypo } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Svg, { Path } from "react-native-svg";

const FileCard = ({ icon, label, extension }) => (
  <TouchableOpacity style={styles.card}>
    <View style={styles.iconContainer}>
      <Image source={icon} style={styles.icon} />
    </View>
    <Text style={styles.cardLabel}>{label}</Text>
    {extension && <Text style={styles.cardExtension}>{extension}</Text>}
  </TouchableOpacity>
);

export default function App2() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          colors={["#6b4aff", "#4a3cda"]}
          style={styles.gradientBackground}
        >
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>MyDocs</Text>
            <Text style={styles.headerSubtitle}>
              3248 files, 26 folders - 60 GB free
            </Text>
          </View>
        </LinearGradient>
        <Svg
          height="80"
          width="100%"
          viewBox="0 0 1440 320"
          style={styles.curve}
        >
          <Path
            fill="#ffffff"
            d="M0,128L40,160C80,192,160,256,240,256C320,256,400,192,480,160C560,128,640,128,720,160C800,192,880,256,960,261.3C1040,267,1120,213,1200,160C1280,107,1360,53,1400,27L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </Svg>
      </View>

      <View style={styles.content}>
        {/* <FileCard icon={require("../assets/icon.png")} label="Assets" /> */}
        <FileCard
          icon={<Entypo name="home" size={20} color="black" />}
          label="Assets"
        />

        {/* <FileCard icon={require("../assets/icon.png")} label="Mountain" /> */}
        {/* <FileCard icon={require("../assets/icon.png")} label="Record" /> */}
        {/* <FileCard icon={require("../assets/icon.png")} label="Project" /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f7",
  },
  header: {
    height: 300,
    backgroundColor: "#6b4aff",
    position: "relative",
  },
  gradientBackground: {
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headerContent: {
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#e0e0e0",
    marginTop: 5,
  },
  curve: {
    position: "absolute",
    bottom: 0,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: -50,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  iconContainer: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 50,
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardExtension: {
    fontSize: 12,
    color: "#888",
  },
});
