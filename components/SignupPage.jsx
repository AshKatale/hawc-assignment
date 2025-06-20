import { Feather } from "@expo/vector-icons";
import { Video } from "expo-av";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { useProfile } from "../context/ProfileContext";

const { width, height } = Dimensions.get("window");

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { register, currentUser } = useProfile();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      Toast.show({ type: "success", text1: "Signup successful!" });
      router.replace("/profile/page");
    }
  }, [currentUser]);

  const handleSignup = () => {
    if (!username || !email || !password) {
      Toast.show({ type: "error", text1: "All fields are required" });
      return;
    }
    if (!email.includes("@")) {
      Toast.show({
        type: "error",
        text1: "Please enter a valid email address",
      });
      return;
    }
    const result = register(username, email, password);
    if (!result.success) {
      Toast.show({ type: "error", text1: result.message });
    } else {
      Toast.show({ type: "success", text1: "Signup successful!" });
      router.replace("/profile/page");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <Video
          source={require("@/assets/images/signup-image.mp4")}
          style={styles.video}
          isLooping
          shouldPlay
          resizeMode="contain"
        />
      </View>
      <Text style={styles.header}>Register</Text>
      <Text style={styles.subHeader}>Please register to login.</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#A0A0A0"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#A0A0A0"
          keyboardType="email-address"
        />
        <View style={styles.passwordRow}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#A0A0A0"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIconTouchable}
          >
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={22}
              color="#6B7280"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 16,
          }}
        >
          <Text style={styles.footerText}>Already have account? </Text>
          <TouchableOpacity onPress={() => router.replace("/login/page")}>
            <Text style={styles.linkText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 24, paddingTop: 40 },
  imagePlaceholder: {
    height: height * 0.26,
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: width * 0.9,
    height: height * 0.3,
    borderRadius: 12,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 30,
    fontFamily: "outfit",
    color: "#1A2530",
  },
  subHeader: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 24,
    fontFamily: "outfit",
  },
  inputContainer: { gap: 16 },
  input: {
    backgroundColor: "#F2F4F7",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 0,
    fontFamily: "outfit",
  },
  passwordRow: { flexDirection: "row", alignItems: "center" },
  eyeIconTouchable: { padding: 8 },
  button: {
    backgroundColor: "#1A2530",
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "outfit",
  },
  footerText: {
    textAlign: "center",
    color: "#A0A0A0",
    marginTop: 0,
    fontFamily: "outfit",
  },
  linkText: { color: "#1A2530", fontWeight: "bold" },
});
