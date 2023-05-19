import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Open Drawer"
        color="#841584"
        // accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
