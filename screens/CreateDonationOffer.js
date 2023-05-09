import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function CreateDonationOffer() {
  const [donorName, setDonorName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [to, setTo] = useState(null);
  const [typeOfDonation, setTypeOfDonation] = useState(null);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const handlePost = () => {
    // Handle posting the donation offer
  };

  const toOptions = [
    { label: 'NGO', value: 'NGO' },
    { label: 'Needy', value: 'Needy' },
  ];

  const typeOfDonationOptions = [
    { label: 'Food', value: 'Food' },
    { label: 'Clothes', value: 'Clothes' },
    { label: 'Funds', value: 'Funds' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Donation Offer</Text>
      <TextInput
        style={styles.input}
        placeholder="Donor Name"
        value={donorName}
        onChangeText={setDonorName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <DropDownPicker
        items={toOptions}
        defaultValue={to}
        placeholder="To"
        containerStyle={{ height: 40, marginBottom: 20 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{ justifyContent: 'flex-start' }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={(item) => setTo(item.value)}
        zIndex={5000} // Added zIndex
        // maxHeight={1000}
      />
      <DropDownPicker
        items={typeOfDonationOptions}
        defaultValue={typeOfDonation}
        placeholder="Type of Donation"
        containerStyle={{ height: 40, marginBottom: 20 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{ justifyContent: 'flex-start' }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={(item) => setTypeOfDonation(item.value)}
        zIndex={4000} // Added zIndex
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handlePost}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  }
  ,
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0099ff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});