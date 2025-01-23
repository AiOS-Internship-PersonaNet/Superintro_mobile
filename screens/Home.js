import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
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

      {/* Flatlist */}
      <FlatList
        data={[
          {
            key: 0,
            title: "What is the meaning of life?",
            text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
            user_pfp: require("../assets/pfp-1.jpg"),
          },
          {
            key: 1,
            title: "Are we living in a simulation?",
            text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
            user_pfp: require("../assets/pfp-2.jpg"),
          },
          {
            key: 2,
            title:
              "How many licks does it take to get to the center of a tootsie pop?",
            text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
            user_pfp: require("../assets/pfp-3.jpg"),
        },
          {
            key: 3,
            title: "How many humans can survive on Mars?",
            text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
            user_pfp: require("../assets/pfp-4.jpg"),
        },
        {
            key: 4,
            title: "Where is the best place to live in the world?",
            text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
            user_pfp: require("../assets/pfp-5.jpg"),
        },
        {
            key: 5,
            title: "What is the best way to learn a new language?",
            text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
            user_pfp: require("../assets/pfp-6.jpg"),
        },
        ]}
        renderItem={({ item }) => (
          <View style={styles.conversationContainer}>
            <Text style={styles.highlightText}>{item.title}</Text>

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
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 50,
                  //   marginRight: 12,
                }}
                source={item.user_pfp}
              />
              <View style={{ width: "85%", alignItems: "center" }}>
                <Text style={styles.text}>{item.text}</Text>
              </View>
            </View>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    // justifyContent: "center",
    padding: 12,
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
  conversationContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
  },
});
