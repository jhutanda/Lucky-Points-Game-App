
import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, Linking, Alert } from 'react-native';
// import Clipboard from '@react-native-clipboard/clipboard';


export default function ContactUs() {
  const handleWhatsAppPress = async () => {
    const phoneNumber = '+918348964688'; // Replace with your WhatsApp number
    const url = `whatsapp://send?phone=${phoneNumber}`;

    try {
      const supported = await Linking.canOpenURL(url);
      if (!supported) {
        Alert.alert(
          'Error',
          'WhatsApp is not installed on your device, or the app cannot handle the request.'
        );
      } else {
        await Linking.openURL(url);
      }
    } catch (err) {
      console.error('An error occurred while opening WhatsApp:', err);
    }
  };

  const handleEmailPress = async () => {
    const email = 'jhutanda@gmail.com'; 
    const subject = 'Calculator: Notes and Currency Value';
    const body = 'Hello, I would like to get in touch with you.';
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      const supported = await Linking.canOpenURL(url);
      if (!supported) {
        Alert.alert(
          'Error',
          'No email app is installed on your device, or the app cannot handle the request.'
        );
      } else {
        await Linking.openURL(url);
      }
    } catch (err) {
      console.error('An error occurred while opening Email:', err);
    }
  };


  // const handleEmailPress = async () => {
  //   const email = 'jhutanda@gmail.com'; 
  //   const subject = 'Calculator: Notes and Currency Value';
  //   const body = 'Hello, I would like to get in touch with you.';
  //   const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  //   try {
  //     const supported = await Linking.canOpenURL(url);
  //     if (!supported) {
  //       Alert.alert(
  //         'Email App Not Found',
  //         'It seems there is no email app installed. Would you like to copy the email address instead?',
  //         [
  //           {
  //             text: 'Cancel',
  //             style: 'cancel',
  //           },
  //           {
  //             text: 'Copy Email',
  //             onPress: () => {
  //               Clipboard.setString(email);
  //               Alert.alert('Copied!', 'The email address has been copied to your clipboard.');
  //             },
  //           },
  //         ]
  //       );
  //     } else {
  //       await Linking.openURL(url);
  //     }
  //   } catch (err) {
  //     console.error('An error occurred while opening Email:', err);
  //     Alert.alert(
  //       'Error',
  //       'Something went wrong. Please try again later.'
  //     );
  //   }
  // };

  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Developer Profile */}
        <View style={styles.profileSection}>
          <Image
            source={require('@/assets/images/jhutanda.png')} // Adjust the path to the image
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>JHUTAN DA</Text>
        </View>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.paragraph}>
          Have questions or need assistance? Feel free to get in touch with us through the details below.
        </Text>

        {/* Contact Buttons */}
        <TouchableOpacity style={styles.shareButton} onPress={handleWhatsAppPress}>
          <Text style={styles.shareText}>WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton} onPress={handleEmailPress}>
          <Text style={styles.shareText}>Email</Text>
        </TouchableOpacity>
        <View style={styles.shareButton}>
          <TouchableOpacity onPress={() => Linking.openURL("https://jhutanda.com/")} style={styles.button}>
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
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  profileSection: {
    alignItems: 'center',
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
    fontWeight: 'bold',
    color: '#333',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
    color: '#444444',
    textAlign: 'justify',
  },
  shareButton: {
    backgroundColor: '#00796b',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  shareText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00796b',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
