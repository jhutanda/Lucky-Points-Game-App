import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Share,
  Linking,
  ScrollView,
} from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';

// Importing Screens
import HomeScreen from './index';

import Numberguess from '@/app/(tabs)/numberguess';

import PrivacyPolicy from '@/assets/legal pages/privacyPolicy';
import TermsAndConditions from '@/assets/legal pages/termsAndConditions';
import AboutMe from '@/assets/legal pages/aboutMe';
import contactUs from '@/assets/legal pages/contactUs';

const Drawer = createDrawerNavigator();

// Custom Drawer Content Component
function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { navigation } = props;

  const shareApp = async () => {
    try {
      await Share.share({
        message: 'Check out this amazing app: https://www.amazon.com/gp/mas/get/amazonapp',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.drawerContainer}>
        {/* Developer Profile */}
        <View style={styles.profileSection}>
          <Image
            source={require('@/assets/images/icon.png')} 
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Lucky Points</Text>
        </View>

        {/* Navigation Links */}
        <View style={styles.linksSection}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.drawerItem}>
              <FontAwesome name="home" size={24} color="#FF00CD" style={styles.drawerIcon} />
              <Text style={styles.linkText}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Numberguess')}>
            <View style={styles.drawerItem}>
              <FontAwesome name="key" size={24} color="#FF00CD" style={styles.drawerIcon} />
              <Text style={styles.linkText}>Number Guess</Text>
            </View>
          </TouchableOpacity>

          

          
        </View>

        {/* Legal Links */}
        <View style={styles.legalSection}>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => navigation.navigate('Privacy Policy')}>
            <Text style={styles.linkText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Terms And Conditions')}>
            <Text style={styles.linkText}>Terms And Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact Us')}>
            <Text style={styles.linkText}>Contact Us</Text>
          </TouchableOpacity>
        </View>

        {/* Share App Button */}
        <TouchableOpacity style={styles.shareButton} onPress={shareApp}>
          <Text style={styles.shareText}>Share My App</Text>
        </TouchableOpacity>

        {/* Rate My App Button */}
        <TouchableOpacity
          style={styles.shareButton}
          onPress={() =>
            Linking.openURL(
              'https://www.amazon.com/gp/mas/get/amazonapp'
            )
          }
        >
          <Text style={styles.shareText}>Rate My App</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareButton} onPress={() => navigation.navigate('About Me')}>
          <Text style={styles.shareText}>About Me</Text>
        </TouchableOpacity>

        <View style={styles.socialMediaSection}>
          <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com/jhutandada')}>
            <FontAwesome name="facebook" size={30} color="#3b5998" style={styles.socialMediaIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/jhutanda')}>
            <FontAwesome name="twitter" size={30} color="#1DA1F2" style={styles.socialMediaIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/jhutanda')}>
            <FontAwesome name="instagram" size={30} color="#E4405F" style={styles.socialMediaIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com/jhutanda')}>
            <FontAwesome name="linkedin" size={30} color="#0077B5" style={styles.socialMediaIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://jhutanda.com/')}>
            <FontAwesome name="globe" size={30} color="#000000" style={styles.socialMediaIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

// App Component
export default function App() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: true, headerTintColor: '#FF00CD' }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Numberguess" component={Numberguess} />
      
      
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} />
      <Drawer.Screen name="Terms And Conditions" component={TermsAndConditions} />
      <Drawer.Screen name="About Me" component={AboutMe} />
      <Drawer.Screen name="Contact Us" component={contactUs} />
    </Drawer.Navigator>
  );
}


// Styles
const styles = StyleSheet.create({ 
    drawerContainer: {
    flex: 1,
    paddingTop:50,
    padding: 10,
    backgroundColor: '#f0f0f0',    
    paddingVertical: 10,
  },   
   drawerIcon: {
    marginRight: 10,
  },
  drawerItem: {
    flexDirection: 'row', 
    alignItems: 'center', 
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
    color: '#FF00CD',
  },
  linksSection: {
    marginBottom: 20,
  },
  linkText: {
    fontSize: 16,
    marginVertical: 10,
    color: '#FF00CD',
  },
  legalSection: {
    marginVertical: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#FF00CD',
    marginVertical: 10,
  },
  shareButton: {
    backgroundColor: '#FF00CD',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  shareText: {
    color: '#fff',
    fontSize: 16,
  },
  socialMediaSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    padding: 10,
    paddingTop: 20,    
    backgroundColor: '#f4f4f4',
  },
  socialMediaIcon: {    
    marginHorizontal: 10,
    marginTop:150,
  },


});
