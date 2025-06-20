import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from 'react-native-toast-message';
import { ProfileProvider } from "../context/ProfileContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'outfit': require("../assets/fonts/Outfit-Regular.ttf"),
    'outfit-medium': require("../assets/fonts/Outfit-Medium.ttf"),
    'outfit-bold': require("../assets/fonts/Outfit-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ProfileProvider>
        <SafeAreaProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="login/page" options={{ headerShown: false, title: 'Login' }} />
            <Stack.Screen name="signup/page" options={{ headerShown: false, title: 'Sign Up' }} />
            <Stack.Screen name="profile/page" options={{ headerShown: false, title: 'Profile' }} />
            <Stack.Screen name="forget-password/email" options={{ headerShown: false, title: 'Login' }} />
          </Stack>
          <Toast />
        </SafeAreaProvider>
      </ProfileProvider>
    </>
  );
}
