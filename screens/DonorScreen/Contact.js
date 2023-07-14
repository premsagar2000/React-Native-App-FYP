import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.subtitle}>Get in touch with us!</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.infoTitle}>Email:</Text>
        <Text style={styles.info}>contact@example.com</Text>
        <Text style={styles.infoTitle}>Phone:</Text>
        <Text style={styles.info}>(123) 456-7890</Text>
        <Text style={styles.infoTitle}>Address:</Text>
        <Text style={styles.info}>123 Main St, Anytown USA</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  contactInfo: {
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  info: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 20,
  },
});

export default ContactPage;
