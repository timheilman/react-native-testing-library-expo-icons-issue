import { StyleSheet, View, Text } from "react-native";
import { isLoaded } from "expo-font";

export default function App() {
  const robotoLoaded = isLoaded("Roboto");
  return (
    <View style={styles.container}>
      <Text>{robotoLoaded}</Text>
    </View>
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
