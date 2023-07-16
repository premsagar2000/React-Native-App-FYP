import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Dashboard() {
  
  return (
    <View style={donor_styles.donor_container}>
      <View style={donor_styles.donor_card}>
        <Text style={donor_styles.donor_cardTitle}>Food</Text>
        <Text style={donor_styles.donor_cardValue}>200</Text>
      </View>
      <View style={donor_styles.donor_card}>
        <Text style={donor_styles.donor_cardTitle}>Clothes</Text>
        <Text style={donor_styles.donor_cardValue}>300</Text>
      </View>
      <View style={donor_styles.donor_card}>
        <Text style={donor_styles.donor_cardTitle}>Funds</Text>
        <Text style={donor_styles.donor_cardValue}>400</Text>
      </View>
    </View>
  );
}

const donor_styles = StyleSheet.create({
  donor_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 30,
  },
  donor_card: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: 'gold',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  donor_cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  donor_cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
