import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { ProfileProvider, useProfile } from '../context/ProfileContext';

export default function ProfilePage() {
  const { currentUser, logout } = useProfile();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.replace('/login/page');
    }
  }, [currentUser]);

  if (!currentUser) return null;

  const handleLogout = () => {
    logout();
    Toast.show({ type: 'success', text1: 'Logged out successfully!', visibilityTime: 2000 });
    router.replace('/login/page');
  };

  return (
    <ProfileProvider>
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Your Profile</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.name}>{currentUser.username}</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                value={currentUser.email}
                editable={false}
                placeholderTextColor="#888"
              />
              <Feather name="mail" size={20} color="#888" style={styles.icon} />
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                value={currentUser.password.replace(/./g, '*')}
                editable={false}
                placeholderTextColor="#888"
                secureTextEntry
              />
              <Feather name="lock" size={20} color="#888" style={styles.icon} />
            </View>
          </View>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ProfileProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 120,
    backgroundColor: '#6893e8',
    justifyContent: 'flex-end',
    paddingBottom: 16,
    paddingLeft: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 32,
  },
  card: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#a084ee',
    marginTop: 8,
    marginBottom: 24,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: '#888',
    marginBottom: 4,
    marginLeft: 4,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5fa',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: '#222',
    fontFamily: 'outfit',
  },
  icon: {
    marginLeft: 8,
  },
  logoutButton: {
    marginTop: 18,
    backgroundColor: '#6893e8',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
