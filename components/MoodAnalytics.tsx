import React from "react";
import MoodHeader from "./MoodHeader";
import MoodContainer from "./MoodContainer";
import { ThemedText } from "./ThemedText";
import { BarChart } from "react-native-gifted-charts";

function MoodAnalytics() {
  const data = [{ value: 50, frontColor: 'lightgrey' }, { value: 80 }, { value: 90 , frontColor: 'lightgrey'}, { value: 70 }];

  return (
    <MoodContainer backgroundColor="orange">
      <MoodHeader title="Today's Mood" icon="emoticon-sad" />
      <ThemedText
        lightColor="white"
        darkColor="white"
        type="subtitle"
      >
        Sad
      </ThemedText>
      <BarChart data={data} frontColor={"white"} roundedTop/>
      
    </MoodContainer>
  );
}
export default MoodAnalytics;
