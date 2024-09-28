import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  brown,
  Colors,
  deepOrange,
  lightDeepOrange,
  lightOrange,
  lightPurple,
  paleGreen,
  paleOrange,
  palePurple,
} from "@/constants/Colors";
import { Button, Card, Icon, Searchbar, Text } from "react-native-paper";
import { useState } from "react";
import CategoryHeader from "@/components/CategoryHeader";
import MoodScore from "../../components/MoodScore";
import MoodAnalytics from "@/components/MoodAnalytics";
import SleepQuality from "@/components/SleepQuality";
import MindfulTracker from "@/components/MindfulTracker";
import aiimage from "../../assets/images/aiimage.png";
import meditation from "../../assets/images/meditation.jpg";
import { Link } from "expo-router";
import CardwithBackground from "@/components/CardwithBackground";
export default function HomeScreen() {
  const date = new Date(Date.now());
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <SafeAreaView>
      <ScrollView>
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
        <CategoryHeader title="Exciting Features 🎉" option={null} />

        <ScrollView horizontal={false} >
          <CardwithBackground title="Inner Strength Assistant" text_Info={["24/7 Availability ⏲", "Emotional Support 🙂"]} CTA_Link={"/chatAI"} image_Uri={aiimage} CTA_Text="Check It Out" CTA_Bg_Color={brown} CTA_Color="white" color="black" blank_Space={100} />

          <CardwithBackground title="Qualified Therapists" text_Info={["Different packages for individual, family and corporate clients", "Schedule a convenient time", "Various payment options", "Attend Your Session"]} CTA_Link={"/therapists"} image_Uri={meditation} CTA_Text="Explore" CTA_Bg_Color={Colors.darkBownish} CTA_Color="white" color="white" blank_Space={15} />

        </ScrollView>
        <CategoryHeader title="Mental Health Metrics" option={null} />
        <ScrollView horizontal style={styles.scrollBehavior}>
          <MoodScore />
          <MoodAnalytics />
          <SleepQuality />
        </ScrollView>
        <CategoryHeader title="Mindful Tracker" option={null} />
        <ThemedView style={{ gap: 20 }}>
          <MindfulTracker
            title="Mindful Hours"
            text="2h/8h Today"
            rightIcon={"transit-connection-variant"}
            leftIcon="clock"
            bgColor="lightgreen"
            secondaryBgColor={paleGreen}
          />
          <MindfulTracker
            title="Sleep Quality"
            text="Sleeping Beauty (~ 8h Avg)"
            leftIcon="bed"
            rightIcon="counter"
            bgColor={lightPurple}
            secondaryBgColor={palePurple}
          />
          <MindfulTracker
            title="Mindful Journal"
            text="64 Day Streak"
            leftIcon="file-document-outline"
            rightIcon="calendar-star"
            bgColor={lightOrange}
            secondaryBgColor={paleOrange}
          />
          <MindfulTracker
            title="Stress Level"
            text="Level 3 (Normal)"
            leftIcon="head-lightbulb"
            rightIcon="head-lightbulb"
            bgColor={deepOrange}
            secondaryBgColor={lightDeepOrange}
          />
          <MindfulTracker
            title="Mood Tracker"
            text="Sad -> Happy -> Neutral"
            leftIcon="emoticon-happy"
            rightIcon="emoticon-happy"
            bgColor={lightOrange}
            secondaryBgColor={paleOrange}
          />
        </ThemedView>
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
  scrollBehavior: {
    paddingVertical: 20,
    marginHorizontal: 20,
    display: "flex",
    gap: 20,
  },
});
