import React, { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {

  const [users, setUsers] = useState([
    { username: 'demo', email: 'demo@gmail.com', password: 'demo' }
  ]);
  const [currentUser, setCurrentUser] = useState(null); 

  const register = (username, email, password) => {

    if (users.some(u => u.email === email)) {
      return { success: false, message: 'Email already registered' };
    }
    const newUser = { username, email, password };
    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
    return { success: true };
  };

  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const logout = () => setCurrentUser(null);

  return (
    <ProfileContext.Provider value={{ users, currentUser, register, login, logout }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
