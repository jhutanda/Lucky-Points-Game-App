import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

export default function PrivacyPolicy() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.subheading}> Privacy Policy</Text>
        <Text style={styles.subheading}> 1. Information We Collect</Text>
        <Text style={styles.paragraph}>
          We do not collect, store, or share any personal or non-personal data
          from users.
        </Text>

        <Text style={styles.subheading}>2. Data Usage</Text>
        <Text style={styles.paragraph}>
          Since we do not collect any data, there is no usage, processing, or
          sharing of user data.
        </Text>

        <Text style={styles.subheading}>3. Permissions</Text>
        <Text style={styles.paragraph}>
          The App does not request or require access to any device features,
          such as the camera, microphone, location, or storage.
        </Text>

        <Text style={styles.subheading}>4. Third-Party Services</Text>
        <Text style={styles.paragraph}>
          This App does not integrate or use third-party services, SDKs, or APIs
          that collect user data.
        </Text>

        <Text style={styles.subheading}>5. Changes to This Privacy Policy</Text>
        <Text style={styles.paragraph}>
          We may update this Privacy Policy from time to time. Any changes will
          be posted within the App and will be effective immediately upon
          posting.
        </Text>

        <Text style={styles.subheading}>6. Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions or concerns about this Privacy Policy, feel
          free to contact us on contact us page.
        </Text>
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
});

