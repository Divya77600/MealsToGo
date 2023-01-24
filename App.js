import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RestaurantsScreen } from './screens/restaurants.screen';
import { ThemeProvider } from "styled-components/native";
import { theme } from './themes/index';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
// import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular,Lato_700Bold } from "@expo-google-fonts/oswald";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons} from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => <Text>Settings</Text>
const Map = () => <Text>Map</Text>

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
  // const [oswaldLoaded] = useOswald({
  //  Oswald_400Regular, 
  // });
  const [latoLoaded] = useLato({
    Lato_400Regular,Lato_700Bold
   });

  //  if (!latoLoaded){
  //   return null;
  //  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <NavigationContainer>
    <Tab.Navigator
     screenOptions={createScreenOptions}
     tabBarOptions={{
       activeTintColor: "tomato",
       inactiveTintColor: "gray",
     }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
    </NavigationContainer>
    </ThemeProvider>
    <ExpoStatusBar style="auto"/>
    </>
  );
}


