import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Platform,
} from "react-native";

export default function App() {
  let x = 0;
  return (
    <SafeAreaView style={styles.container}>
      <Text>Opxsdbfdvf! {x}</Text>
      <Button
        onPress={() => {
          x = x + 1;
        }}
        title="click me"
        accessibilityLabel="couasdnter"
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
});
