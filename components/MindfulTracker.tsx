import React from "react";
import { Icon } from "react-native-paper";
import MoodContainer from "./MoodContainer";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Dimensions, StyleSheet } from "react-native";

interface Props {
  bgColor: string;
  secondaryBgColor: string;
  title: string;
  text: string;
  leftIcon: string;
  rightIcon: string | any| null;
}
const screenWidth = Dimensions.get("window");
function MindfulTracker({
  bgColor = "black",
  secondaryBgColor,
  title,
  text,
  leftIcon,
  rightIcon,
}: Props) {
  return (
    <MoodContainer backgroundColor="white">
      <ThemedView style={styles.row}>
        <ThemedView style={[styles.iconEffects, { backgroundColor: secondaryBgColor }]}>
          <Icon source={leftIcon} size={40} color={bgColor} />
        </ThemedView>
        <ThemedView style={{maxWidth: screenWidth.width/3}}>
          <ThemedText lightColor="black" darkColor="white" type="subtitle">
            {title}
          </ThemedText>
          <ThemedText lightColor="black" darkColor="white" type="default">
            {text}
          </ThemedText>
        </ThemedView>
        <Icon
          source={rightIcon}
          size={60}
          color={bgColor}
        />
      </ThemedView>
    </MoodContainer>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems:"stretch",
    gap: 30,
    paddingHorizontal: 20,
  },
  iconEffects: {
    padding: 15,
    borderRadius: 30,
  },
});

export default MindfulTracker;
