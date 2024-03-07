import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, StatusBar } from "react-native";
const KeyboardMaintainer = ({children}: {children: any}) => {
  
    
    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView style={styles.container} showsVerticalScrollIndicator>
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default KeyboardMaintainer;

const styles = StyleSheet.create({
    container: {
       padding: 5,
       paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
});
