import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const primaryGray = "#64748b";
const lightGray = "#e5e7eb";
const darkGray = "#222";

export default function OtpPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const router = useRouter();

  const handleChange = (value, idx) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[idx] = value;
      setOtp(newOtp);
      if (value && idx < 3) {
        const nextInput = `otp${idx + 1}`;
        if (nextInput) {
        }
      }
    }
  };

  const handleContinue = () => {
    if (otp.join("").length === 4) {
      router.push("/forget-password/reset-password");
    } else {
      alert("Please enter the 4-digit OTP");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification</Text>
      <Text style={styles.subtitle}>
        We sent you a code to verify your email address.
      </Text>
      <Text style={styles.label}>Enter your OTP code here</Text>
      <View style={styles.otpRow}>
        {otp.map((digit, idx) => (
          <TextInput
            key={idx}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleChange(value, idx)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.resendText}>I don't receive a code</Text>
      <TouchableOpacity>
        <Text style={styles.resendLink}>RESEND</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: primaryGray,
    marginBottom: 8,
  },
  subtitle: { color: primaryGray, marginBottom: 24 },
  label: { color: primaryGray, marginBottom: 12, marginLeft: 4 },
  otpRow: { flexDirection: "row", justifyContent: "center", marginBottom: 24 },
  otpInput: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: lightGray,
    textAlign: "center",
    fontSize: 22,
    marginHorizontal: 8,
    color: darkGray,
  },
  button: {
    backgroundColor: primaryGray,
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  resendText: { color: primaryGray, marginTop: 24, textAlign: "center" },
  resendLink: {
    color: darkGray,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 4,
  },
});
