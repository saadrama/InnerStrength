import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";

interface Props {
  children: any;
  backgroundColor: string;
}
function MoodContainer({ children, backgroundColor }: Props) {
  return (
    <ThemedView
      style={[styles.background, { backgroundColor: backgroundColor }]}
    >
      {children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  background: {
    marginHorizontal: 10,
    display: "flex",
    flexDirection: "column",
    padding: 10,
    // width: "auto",
    // height: "auto",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
export default MoodContainer;
