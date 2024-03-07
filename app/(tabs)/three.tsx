import { OpenAI } from "openai";
import { useState } from "react";
import { StyleSheet, ScrollView, TextInput, Button, Text } from "react-native";
import { View } from "@/components/Themed";
import KeyboardMaintainer from "@/components/KeyboardMaintainer";

// Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key

interface ChatMessage {
  role: "user" | "ai";
  content: any;
}

const openai = new OpenAI({
  apiKey: "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",
});

export default function TabTwoScreen() {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    // Add user's message to chat history
    // setChatHistory([...chatHistory, { role: 'user', content: userInput }]);

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        messages: [
          {
            role: "system",
            content:
              "You are an assistant to women that have special medical needs such as PCOS, Endometriosis, pregnancy, etc. Your goal is to empower women with information on their specific conditions. They should feel confident in meeting with medical professionals and advocating for themselves and their health.",
          },
          { role: "user", content: userInput },
        ],
        max_tokens: 100, // Increase the value to allow longer messages
        temperature: 0.2,
        n: 1,
        stop: "",
      });

      // Add AI's response to chat history
      setChatHistory([
        ...chatHistory,
        { role: "user", content: userInput },
        { role: "ai", content: response.choices[0].message.content },
      ]);
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      // Handle error as needed
    }

    // Clear user input
    setUserInput("");
  };

  return (
    <>
      <View>
        <KeyboardMaintainer>
          {chatHistory.map((message, index) => (
            <View
              key={index}
              style={[
                styles.messageContainer,
                message.role === "user" ? styles.userMessage : styles.aiMessage,
              ]}
            >
              <Text>{message.content}</Text>
            </View>
          ))}
          <View style={styles.inputContainer}>
            <TextInput
              multiline={true} 
              style={styles.input}
              placeholder="Type your message..."
              value={userInput}
              onChangeText={(text) => setUserInput(text)}
            />
            <Button title="Send" onPress={handleSendMessage} />
          </View>
        </KeyboardMaintainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    padding: 6,
  },
  messageContainer: {
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: "80%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#3498db", // User message color
  },
  aiMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#2ecc71", // AI message color
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});
