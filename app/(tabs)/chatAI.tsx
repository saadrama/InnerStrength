import React from "react"
import { StyleSheet, Image, Platform, ScrollView, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Button, MD2Colors, TextInput } from "react-native-paper";
import { brown } from "@/constants/Colors";

export default function TabTwoScreen() {
  const [generatedText, setGeneratedText] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [previousPrompts, setPreviousPrompts] = useState<{ prompt: string, response: string }[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState(false);

  const closeInput = () => {
    setIsFocused(false);
  };
  // scroll to scrollview
  const scrollViewRef = useRef<ScrollView>(null)
  //create a gemini model

  const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GEMINI_API_KEY || ""
  )
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash", systemInstruction: `This is a mental health application called Inner Strength. You are supposed to be their go-to assistant.
        You are to answer user's question by keeping it professional and friendly at the same time.
        If your output needs some steps number them don't put asterics.
        Don't provide medication advice but rather give them general guidelines if you can't,  tell them to consult a doctor or a therapist present in this application`})

  //function to execute user info
  const executeUserQuery = async () => {
    try {
      closeInput()
      setIsLoading(true)
      const result = model.generateContent(prompt)
      const response = (await result).response.text()
      setIsLoading(false)
      setPreviousPrompts([...previousPrompts, { prompt, response }])
      setPrompt("")
      setGeneratedText(response)
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }

  }

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true })
    }
  }, [isLoading, previousPrompts])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <ScrollView ref={scrollViewRef}>
          <ThemedView >
            <ThemedText darkColor="white" lightColor="black" type="subtitle" style={{ textAlign: "center" }}>
              You can talk about mental health and general health stuff with this AI
            </ThemedText>
            {generatedText && (
              <Button buttonColor="red" textColor="white" onPress={() => { setGeneratedText(""); setPreviousPrompts([]) }} style={styles.clearBtn}>
                Clear Generated Text
              </Button>
            )}
            {previousPrompts.length > 0 && previousPrompts.map((item, index) => (
              <ThemedView key={index} style={styles.previousPromptContainer}>
                <ThemedText darkColor="white" lightColor="black" type="subtitle" style={styles.previousPrompt}>
                  Prompt: {item.prompt}
                </ThemedText>
                <ThemedText darkColor="white" lightColor="black" style={styles.previousResponse}>
                  Response: {item.response}
                </ThemedText>
              </ThemedView>
            ))}
          </ThemedView>
          {isLoading && <ActivityIndicator animating={true} color={MD2Colors.red800} />}
        </ScrollView>
      </View>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.promptInput}
          label={"What do you want to talk about today?"}
          onChangeText={(text) => setPrompt(text)}
          value={prompt}
          onFocus={() => setIsFocused(true)}
          onBlur={closeInput}
          // onEndEditing={closeInput}
          activeUnderlineColor={brown}
        />
        <Button textColor="white" style={styles.generateBtn} onPress={executeUserQuery}>
          Generate
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 60,
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  promptInput: {
    flex: 1,
    // marginRight: 10,
    backgroundColor: 'transparent'
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    // paddingBottom: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  generateBtn: {
    backgroundColor: brown,
    color: "white"
  },
  clearBtn: {
    marginVertical: 10,
  },
  generatedText: {
    borderWidth: 1,
    borderRadius: 20,
    elevation: 2,
    padding: 10
  },
  previousPromptContainer: {
    marginVertical: 10,

  },
  previousPrompt: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginVertical: 5,
    borderColor: "grey"
  },
  previousResponse: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginVertical: 5,
    borderColor: "grey"

  }
});