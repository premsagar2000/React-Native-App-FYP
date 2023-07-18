
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
// import donationImage from '../assets/DonorImages/create-donation.jpg';
// import styles from './DonorCreateDonation.styles';
import { useLogin } from '../../LoginProvider';
import { ScrollView } from 'react-native-gesture-handler';

const CreateDonationOffer= () => {
  const [donationRecipient, setDonationRecipient] = useState('');
  const [donationType, setDonationType] = useState('');
  const [foodType, setFoodType] = useState('');
  const [foodQuantity, setFoodQuantity] = useState('');
  const [clothingType, setClothingType] = useState('');
  const [clothingCondition, setClothingCondition] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [clothesQuantity, setClothesQuantity] = useState('');
  const [needyName, setNeedyName] = useState('');
  const [needyEmail, setNeedyEmail] = useState('');

  const {credentials} = useLogin()


  
  const resetForm = () => {
    setDonationRecipient('');
    setDonationType('');
    setFoodType('');
    setFoodQuantity('');
    setClothingType('');
    setClothingCondition('');
    setDonationAmount('');
    setClothesQuantity('');
    setNeedyName('');
    setNeedyEmail('');
  };

  const handleClothesQuantityChange = (value) => {
    setClothesQuantity(value);
  };

  const handleDonationRecipientChange = (value) => {
    setDonationRecipient(value);
  };

  const handleDonationTypeChange = (value) => {
    setDonationType(value);
  };

  const handleFoodTypeChange = (value) => {
    setFoodType(value);
  };

  const handleFoodQuantityChange = (value) => {
    setFoodQuantity(value);
  };

  const handleClothingTypeChange = (value) => {
    setClothingType(value);
  };

  const handleClothingConditionChange = (value) => {
    setClothingCondition(value);
  };

  const handleDonationAmountChange = (value) => {
    setDonationAmount(value);
  };

  const handleNeedyNameChange = (value) => {
    setNeedyName(value);
  };

  const handleNeedyEmailChange = (value) => {
    setNeedyEmail(value);
  };

  const handleSubmit = async () => {
    if (donationRecipient === 'NGO' && donationType === 'food') {
      const formData = {
        donor_name: credentials?.user?.name,
        donor_email: credentials?.user?.email,
        donor_address: credentials?.user?.address,
        recipient_type: donationRecipient,
        donation_type: donationType,
        food_quantity: foodQuantity,
      };
      // Make API request here
      try {
        const response = await fetch('http://10.102.144.107:5000/create-donation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          alert('Donation Created and sent');
          resetForm();
        } else {
          alert(data.message);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
        // Handle error
      }
    } else if (donationRecipient === 'Needy-Person' && donationType === 'food') {
      const formData = {
        donor_name: credentials?.user?.name,
        donor_email: credentials?.user?.email,
        recipient_type: donationRecipient,
        recipient_name: needyName,
        recipient_email: needyEmail,
        donation_type: donationType,
        food_quantity: foodQuantity,
        food_type: foodType,
      };
      // Make API request here
      try {
        const response = await fetch('http://10.102.144.107:5000/create-donation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          alert('Donation Created and sent');
          resetForm();
        } else {
          alert(data.message);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
        // Handle error
      }
    } else if (donationRecipient === 'Needy-Person' && donationType === 'cloth') {
      const formData = {
        donor_name: credentials?.user?.name,
        donor_email: credentials?.user?.email,
        recipient_type: donationRecipient,
        recipient_name: needyName,
        recipient_email: needyEmail,
        donation_type: donationType,
        cloth_quantity: clothesQuantity,
        cloth_type: clothingType,
        cloth_quality: clothingCondition,
      };
      // Make API request here
      try {
        const response = await fetch('http://10.102.144.107:5000/create-donation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          alert('Donation Created and sent');
          resetForm();
        } else {
          alert(data.message);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
        // Handle error
      }
    } else if (donationRecipient === 'Needy-Person' && donationType === 'money') {
      const formData = {
        donor_name: credentials?.user?.name,
        donor_email: credentials?.user?.email,
        recipient_type: donationRecipient,
        recipient_name: needyName,
        recipient_email: needyEmail,
        donation_type: donationType,
        amount: donationAmount,
      };
      // Make API request here
      try {
        const response = await fetch('http://10.102.144.107:5000/create-donation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          alert('Donation Created and sent');
          resetForm();
        } else {
          alert(data.message);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
        // Handle error
      }
    } else if (donationRecipient === 'NGO' && donationType === 'cloth') {
      const formData = {
        donor_name: credentials?.user?.name,
        donor_email: credentials?.user?.email,
        donor_address: credentials?.user?.address,
        recipient_type: donationRecipient,
        donation_type: donationType,
        cloth_quality: clothingCondition,
        cloth_quantity: clothesQuantity,
      };
      // Make API request here
      try {
        const response = await fetch('http://10.102.144.107:5000/create-donation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          alert('Donation Created and sent');
          resetForm();
        } else {
          alert(data.message);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
        // Handle error
      }
    } else if (donationRecipient === 'NGO' && donationType === 'money') {
      const formData = {
        donor_name: credentials?.user?.name,
        donor_email: credentials?.user?.email,
        donor_address: credentials?.user?.address,
        recipient_type: donationRecipient,
        donation_type: donationType,
        amount: donationAmount,
      };
      // Make API request here
      try {
        const response = await fetch('http://10.102.144.107:5000/create-donation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          alert('Donation Created and sent');
          resetForm();
        } else {
          alert(data.message);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
        // Handle error
      }
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.donorCreateDonation}>
        <Text style={styles.heading}>Create Donation</Text>

        <View style={styles.formGroup}>
          <Text>Donation Recipient:</Text>
          <Picker
            selectedValue={donationRecipient}
            onValueChange={handleDonationRecipientChange}
            style={styles.picker}
          
            
          >
            <Picker.Item label="Select recipient" value=""  />
            <Picker.Item label="NGO" value="NGO" />
            <Picker.Item label="Needy Person" value="Needy-Person" />
          </Picker>
        </View>

        {donationRecipient === 'Needy-Person' && (
          <View>
            <View style={styles.formGroup}>
              <Text>Person Name:</Text>
              <TextInput
                value={needyName}
                placeholder="Needy Person Name"
                onChangeText={handleNeedyNameChange}
                style={styles.input}
              />
            </View>
            <View style={styles.formGroup}>
              <Text>Person Email:</Text>
              <TextInput
                value={needyEmail}
                placeholder="Needy Person Email"
                onChangeText={handleNeedyEmailChange}
                style={styles.input}
              />
            </View>
          </View>
        )}

        <View style={styles.formGroup}>
          <Text>Donation Type:</Text>
          <Picker
            selectedValue={donationType}
            onValueChange={handleDonationTypeChange}
            style={styles.picker}
          >
            <Picker.Item label="Select one" value="" />
            <Picker.Item label="Food" value="food" />
            <Picker.Item label="Clothing" value="cloth" />
            <Picker.Item label="Money" value="money" />
          </Picker>
        </View>

        {donationType === 'food' && (
          <View>
            <Text>Food Type:</Text>
            <Picker
              selectedValue={foodType}
              onValueChange={handleFoodTypeChange}
              style={styles.picker}
            >
              <Picker.Item label="Select one" value="" />
              <Picker.Item label="Canned Goods" value="canned goods" />
              <Picker.Item label="Fresh Produce" value="fresh produce" />
              <Picker.Item label="Non-Perishables" value="non-perishables" />
            </Picker>

            <Text>Quantity:</Text>
            <TextInput
              value={foodQuantity}
              onChangeText={handleFoodQuantityChange}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        )}

        {donationType === 'cloth' && (
          <View>
            <Text>Clothing Type:</Text>
            <Picker
              selectedValue={clothingType}
              onValueChange={handleClothingTypeChange}
              style={styles.picker}
            >
              <Picker.Item label="Select one" value="" />
              <Picker.Item label="Shalwar Kameez" value="shalwar-kameez" />
              <Picker.Item label="Shirts" value="shirts" />
              <Picker.Item label="Pants" value="pants" />
              <Picker.Item label="Jackets" value="jackets" />
            </Picker>

            <Text>Condition:</Text>
            <Picker
              selectedValue={clothingCondition}
              onValueChange={handleClothingConditionChange}
              style={styles.picker}
            >
              <Picker.Item label="New" value="new" />
              <Picker.Item label="Gently Used" value="gently-used" />
              <Picker.Item label="Heavily Used" value="heavily-used" />
            </Picker>

            <Text>Quantity:</Text>
            <TextInput
              value={clothesQuantity}
              onChangeText={handleClothesQuantityChange}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        )}

        {donationType === 'money' && (
          <View style={styles.formGroup}>
            <Text>Amount:</Text>
            <TextInput
              value={donationAmount}
              onChangeText={handleDonationAmountChange}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Donate</Text>
        </TouchableOpacity>
      </View>

    
    </View>
    </ScrollView>
  );
  
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
     
  },
  donorCreateDonation: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  
  formContainer: {
    width: '120%',
    maxWidth: '120%',
    margin: 20,
    padding: 50,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'gold',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center'
  },
});

export default CreateDonationOffer;