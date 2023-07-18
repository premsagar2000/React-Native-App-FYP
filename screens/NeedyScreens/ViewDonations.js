import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity , FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { useLogin } from '../../LoginProvider';

export default function ViewDonations() {
  const [dataNeedy, setDataNeedy] = useState([]);
  const {credentials} = useLogin()
  useEffect(() => {
   axios.post('http://10.102.144.107:5000/needy-updated-donations-history',{email:credentials.user.email})
      .then(response => {
        setDataNeedy(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Donor Name</Text>
          <Text style={styles.headerText}>Donor Email</Text>
          <Text style={styles.headerText}>Donation Type</Text>
          <Text style={styles.headerText}>Quantity/Amount</Text>
          <Text style={styles.headerText}>Donation Date</Text>
        </View>
        <FlatList
        data={dataNeedy}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.rowText}>{item.donor_name}</Text>
            <Text style={styles.rowText}>{item.donor_email}</Text>
            <Text style={styles.rowText}>{item.donation_type}</Text>
            
            <Text style={styles.rowText}>{item.donation_quantity}</Text>
            <Text style={styles.rowText}>{item.donation_date}</Text>
          </View>
    )}
    />
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

