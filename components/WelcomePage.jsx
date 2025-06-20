import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function WelcomePage() {
  const router = useRouter();
  return (
    <SafeAreaView style={style.container}>
      <StatusBar style="dark" />
      <View style={style.logoContainer}>
        <Image 
          source={require("@/assets/images/logo.png")}
          style={style.image}
        />
        <View style={style.titleContainer}>
          <Text style={style.headerText}>INFINITY</Text>
          <View style={style.titleUnderline} />
        </View>
        <Text style={style.subtitle}>Made by Ashitosh</Text>
      </View>
      <View style={style.buttonRow}>
        <TouchableOpacity style={style.button} onPress={() => router.push('/login/page')}>
          <Text style={style.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 16,
  },
  image: {
    width: width * 0.6,
    height: height * 0.25,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  headerText: {
    fontFamily: 'outfit',
    fontSize: 36,
    fontWeight: '900',
    textAlign: 'center',
    color: '#1A2530',
    letterSpacing: 4,
    textShadowColor: 'rgba(102, 126, 234, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom: 8,
  },
  titleUnderline: {
    width: 80,
    height: 4,
    backgroundColor: '#667eea',
    borderRadius: 2,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  subtitle: {
    fontFamily: 'outfit',
    fontSize: 16,
    color: '#64748b',
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  button: {
    backgroundColor: '#03033b',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'outfit',
    letterSpacing: 1,
  },
});