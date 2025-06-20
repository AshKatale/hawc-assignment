import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const primaryGray = '#64748b';
const lightGray = '#e5e7eb';
const darkGray = '#222';

export default function EmailPage() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    if (email && email.includes('@')) {
      router.push('/forget-password/otp');
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification</Text>
      <Text style={styles.subtitle}>Enter your email address to enable 2-step verification.</Text>
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="enter your email address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#b0b0b0"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc', padding: 24, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', color: primaryGray, marginBottom: 8 },
  subtitle: { color: primaryGray, marginBottom: 24 },
  label: { color: primaryGray, marginBottom: 4, marginLeft: 4 },
  input: {
    backgroundColor: lightGray,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 24,
    color: darkGray,
  },
  button: {
    backgroundColor: primaryGray,
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
