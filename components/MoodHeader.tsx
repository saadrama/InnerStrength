import React from "react";
import { Icon } from "react-native-paper";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";

interface Props{
    icon: string |null,
    title:string
}
function MoodHeader({icon, title}:Props) {
  return (
    <ThemedView style={styles.row}>
      <Icon source={icon} size={28} color="white" />
      <ThemedText type="title" lightColor="white" darkColor="white">
        {title}
      </ThemedText>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
export default MoodHeader;
