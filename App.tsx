import * as dotenv from "dotenv";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/Navigation";
import { ThemeProvider } from "react-native-elements";
import { theme } from "./src/styles/theme";

dotenv.config();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
