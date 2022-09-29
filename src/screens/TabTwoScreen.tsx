import React from "react";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

interface TabTwoScreenProps extends RootTabScreenProps<"TabTwo"> {}

export const TabTwoScreen: React.FC<TabTwoScreenProps> = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tienda</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        title="Lista de productos"
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
