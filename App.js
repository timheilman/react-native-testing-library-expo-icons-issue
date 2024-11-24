import { StyleSheet, View } from "react-native";
import { PaperProvider, TextInput } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <TextInput
          placeholder="Placeholder"
          right={<TextInput.Icon icon="eye" />}
        />
      </View>
    </PaperProvider>
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
