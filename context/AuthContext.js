import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [credentials, setCredentials] = useState({});

  return (
    <View>
      <AuthContext.Provider value={{ credentials, setCredentials }}>
        {children}
      </AuthContext.Provider>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export { AuthContext, AuthProvider };