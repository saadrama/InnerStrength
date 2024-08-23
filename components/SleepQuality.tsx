import React from "react";
import MoodContainer from "./MoodContainer";
import { ThemedText } from "./ThemedText";
import MoodHeader from "./MoodHeader";
import { BarChart } from "react-native-gifted-charts";

function SleepQuality() {
  const barData = [
    { value: 250, label: "M" },

    { value: 500, label: "T", frontColor: "lightgrey" },

    { value: 745, label: "W", frontColor: "lightgrey" },

    { value: 320, label: "T" },

    { value: 600, label: "F", frontColor: "lightgrey" },

    { value: 256, label: "S" },

    { value: 300, label: "S" },
  ];
  return (
    <MoodContainer backgroundColor="#8576C4">
      <MoodHeader icon="sleep" title="Sleep Quality" />
      <ThemedText type="subtitle" lightColor="white" darkColor="white">
        😴 Sleeping Beauty
      </ThemedText>
      <BarChart
        // horizontal
        barWidth={15}
        barBorderRadius={4}
        frontColor="white"
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
      />
    </MoodContainer>
  );
}

export default SleepQuality;
