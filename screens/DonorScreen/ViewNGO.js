import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity , FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
export default function ViewNGO() {
  const [ngos, setNgos] = useState([]);

  useEffect(()=>{
  
    fetch(`http://10.102.144.107:5000/ngos`,{
        method:"GET"
    })
    .then(response => response.json())
    .then(data => {
      
      setNgos(data)
      
    })
    .catch(error => console.error(error));
  })
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>NGO name</Text>
          <Text style={styles.headerText}>Email Address</Text>
          <Text style={styles.headerText}>CNIC</Text>
          <Text style={styles.headerText}>Contact No</Text>
          <Text style={styles.headerText}>Address</Text>
        </View>
        <FlatList
        data={ngos}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.rowText}>{item.name}</Text>
            <Text style={styles.rowText}>{item.email}</Text>
            <Text style={styles.rowText}>{item.email}</Text>
            
            <Text style={styles.rowText}>{item.phone}</Text>
            <Text style={styles.rowText}>{item.address}</Text>
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

