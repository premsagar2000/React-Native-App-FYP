import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

export default function SignOut({handleSignOut}) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={handleSignOut}>
      <FontAwesome name="sign-out" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
