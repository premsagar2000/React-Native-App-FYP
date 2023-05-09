import { StyleSheet } from 'react-native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function ViewNGOs() {
  const data = [
    {
      ngoName: 'NGO 1',
      contactNumber: '1234567890',
      city: 'City 1',
      numOfFamilyRegistered: 10,
      emailAddress: 'ngo1@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 2',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 3',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 4',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 5',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 6',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 7',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 8',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 9',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 10',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 10',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 10',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 10',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 10',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 10',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 10',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 10',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 10',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
    {
      ngoName: 'NGO 10',
      contactNumber: '0987654321',
      city: 'City 2',
      numOfFamilyRegistered: 5,
      emailAddress: 'ngo2@example.com',
      detailsLink: 'https://dummylink.com',
    },
  ];

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Ngo name</Text>
        <Text style={styles.headerText}>Contact number</Text>
        <Text style={styles.headerText}>City</Text>
        <Text style={styles.headerText}>No. of Family registered</Text>
        <Text style={styles.headerText}>Email address</Text>
        <Text style={styles.headerText}>Details</Text>
      </View>
      {data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.rowText}>{item.ngoName}</Text>
          <Text style={styles.rowText}>{item.contactNumber}</Text>
          <Text style={styles.rowText}>{item.city}</Text>
          <Text style={styles.rowText}>{item.numOfFamilyRegistered}</Text>
          <Text style={styles.rowText}>{item.emailAddress}</Text>
          <TouchableOpacity style={styles.rowText} onPress={() => window.open(item.detailsLink, '_blank')}>
            <Text style={styles.linkText}>Details</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
    </ScrollView>
  );
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  rowText: {
    flex: 1,
    textAlign: 'center',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

