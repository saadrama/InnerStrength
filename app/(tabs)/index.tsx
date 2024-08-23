import { Image, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import "nativewind";
import { Colors } from "@/constants/Colors";
import { Button, Icon, Searchbar } from "react-native-paper";
import { useState } from "react";
import CategoryHeader from "@/components/CategoryHeader";
import MoodScore from "../../components/MoodScore";
import MoodAnalytics from "@/components/MoodAnalytics";
import SleepQuality from "@/components/SleepQuality";

export default function HomeScreen() {
  const date = new Date(Date.now());
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <SafeAreaView>
      <ThemedView style={styles.titleContainer}>
        <View style={styles.row}>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <Icon source="calendar-month" color="white" size={28} />
            <ThemedText lightColor="white" darkColor="white" type="subtitle">
              {date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </ThemedText>
          </View>
          <TouchableOpacity
            style={{
              right: 10,
              borderWidth: 1.5,
              borderColor: "orange",
              borderRadius: 50,
              padding: 10,
            }}
            onPress={() => console.log("Pressed")}
          >
            <Icon source="bell" color="white" size={28} />
          </TouchableOpacity>
        </View>
        <ThemedView
          style={[styles.row, { backgroundColor: Colors.darkBownish }]}
        >
          <Image
            style={styles.image}
            source={{ uri: "https://i.pravatar.cc/50" }}
            alt="placeholder"
          />
          <ThemedView style={{ backgroundColor: Colors.darkBownish }}>
            <ThemedText type="title" lightColor="white" darkColor="white">
              Hi, Juma
            </ThemedText>
            <ThemedView
              style={{
                flexDirection: "row",
                margin: 0,
                backgroundColor: Colors.darkBownish,
              }}
            >
              <Button icon={"star"} textColor="white">
                Pro
              </Button>
              <Button icon={"peace"} textColor="white">
                80%
              </Button>
              <Button textColor="white">
                <ThemedText>😊</ThemedText> Happy
              </Button>
            </ThemedView>
          </ThemedView>
        </ThemedView>
        <Searchbar
          placeholder="Search Anything"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </ThemedView>
      <CategoryHeader title="Mental Health Metrics" option={null} />
      <ScrollView horizontal style={styles.scrollBehavior} >
      <MoodScore/>
      <MoodAnalytics/>
      <SleepQuality/>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: Colors.darkBownish,
    padding: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,
  },
  scrollBehavior:{
    paddingVertical:20,
    marginHorizontal: 20,
    display:"flex",
    gap:20
  }
});
