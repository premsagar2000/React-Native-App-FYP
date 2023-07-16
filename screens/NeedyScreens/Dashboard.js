import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Food</Text>
        <Text style={styles.cardValue}>200</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Clothes</Text>
        <Text style={styles.cardValue}>300</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Funds</Text>
        <Text style={styles.cardValue}>400</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 30,
  },
  card: {
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
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
