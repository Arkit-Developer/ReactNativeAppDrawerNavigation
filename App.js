import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Setting from "./Setting";
import HomeScreen from "./HomeScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation={true}
        initialRouteName="HomeScreen"
      >
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="Setting" component={Setting} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
