import React from "react";
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, Linking,} from "react-native";

export default function AboutMe() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Developer Profile */}
        <View style={styles.profileSection}>
          <Image
            source={require("@/assets/images/jhutanda.png")} // Adjust the path to the image
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>JHUTAN DA</Text>
        </View>
        <Text style={styles.heading}>About Me</Text>
        <Text style={styles.paragraph}>
          Hi, I'm Jhutan Barman — an experienced Website Designer & Developer and
          Android Mobile App Developer specializing in React Native with
          TypeScript.
        </Text>

        <Text style={styles.paragraph}>
          I also have expertise in WordPress  Development and have spent years
          building and designing dynamic web solutions. I hold a diploma in
          Computer Science and Technology from  Siliguri Government Polytechnic.
        </Text>
        <View style={styles.bottonContainer}>
      <TouchableOpacity  onPress={() => Linking.openURL("https://jhutanda.com/")} style={styles.button}>
        <Text style={styles.buttonText}>Visit My Website</Text>
      </TouchableOpacity>
    </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333333",
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
    color: "#555555",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
    color: "#444444",
    textAlign: "justify",
  },
  listItem: {
    fontSize: 16,
    lineHeight: 22,
    marginLeft: 10,
    color: "#444444",
  },
  footer: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#666666",
  },
  bottonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   marginTop: 15,
  },
  button: {
    backgroundColor: "#00796b",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  
});
