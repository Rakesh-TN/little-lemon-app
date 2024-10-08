import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LittleLemonHeader from './Components/LittleLemonHeader';
import LittleLemonFooter from './Components/LittleLemonFooter';
import WelcomeScreen from './Components/WelcomeScreen';
import MenuItemsFlatList from './Components/MenuItemsFlatList';
import MenuItemsSectionList from './Components/MenuItemsSectionList';
import FeedBackForm from './Components/FeedBack';
import LoginScreen from './Components/LoginScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <LoginScreen />
        {/* <WelcomeScreen /> */}
        <FeedBackForm />
        {/* <MenuItemsFlatList /> */}
        {/* <MenuItemsSectionList /> */}
        {/* <StatusBar style="auto" /> */}
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { 
    backgroundColor: '#333333' 
  },
});
