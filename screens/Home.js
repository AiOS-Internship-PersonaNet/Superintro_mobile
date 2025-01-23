import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../config/Colors";

export default function Home() {
  return (
    <View style={styles.container}>
        {/* Temporary views */}
      <View 
        style={{
          flexDirection: "row",
          padding: 12,
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Image
          style={{ width: 80, height: 100 }}
          source={require("../assets/logo-min.jpeg")}
        />
        <View>
          <Text style={styles.title}>SuperIntro Home!</Text>
          <Text style={styles.text}>
            <Text style={styles.highlightText}>10x</Text> your social encounters
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: Colors.secondary,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    color: Colors.secondary,
  },
  highlightText: {
    fontSize: 18,
    color: Colors.accent,
    fontWeight: "bold",
  },
});
