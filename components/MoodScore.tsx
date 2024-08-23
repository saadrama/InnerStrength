import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-paper";
import MoodHeader from "./MoodHeader";
import MoodContainer from "./MoodContainer";
import { PieChart } from "react-native-gifted-charts";

function MoodScore() {
  const data = [{ value: 270 , color:"white"}, { value: 70, color:"lightgrey" }];
  return (
    <MoodContainer backgroundColor={"#4ade80"}>
      <MoodHeader title="Mood Score" icon="heart" />
      <PieChart
        data={data}
        donut
        innerRadius={70}
        strokeWidth={5}
        strokeColor="#4ade80"
        backgroundColor="#4ade80"
        centerLabelComponent={() => (
          <>
            <ThemedText type="subtitle" lightColor="white" darkColor="white">
              80%
            </ThemedText>
            <ThemedText
              type="subtitle"
              lightColor="white"
              darkColor="white"
            >
              Healthy
            </ThemedText>
          </>
        )}
      />
    </MoodContainer>
  );
}

export default MoodScore;
