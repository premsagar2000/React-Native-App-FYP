// import React, { useEffect, useState, useContext } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { useLogin } from '../../LoginProvider';
// import { ScrollView } from 'react-native-gesture-handler';
// export default function BasicTable() {
//     let [rows, setRows] = useState([]);
//     const [recipient_email, setRecipientEmail] = useState('');
  
//     const { credentials } = useLogin();
  
//     useEffect(() => {
//       fetch('http://10.102.136.134:5000/needy-donations', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ recipient_email: credentials?.user?.email }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           setRows(data);
//           console.log(rows);
//         })
//         .catch((error) => console.error(error));
//     }, []);
  
//     const handleAccept = async (row) => {
//       console.log("id: ", row._id);
//       const handleAccept = async (row) => {
//         console.log("id: ", row._id);
      
//         try {
//           const response = await fetch('http://10.102.136.134:5000/donations-update', {
//             method: 'PATCH',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ id: row._id }),
//           });
//           const data = await response.json();
      
//           if (response.ok) {
//             const newRows = rows.filter(r => r.id !== row.id);
//             setRows(newRows);
//             console.log('user side', data);
      
//             fetch('http://10.102.136.134:5000/donation-history', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify({ ...data, email: credentials?.user?.email })
//             })
//               .then(response => response.json())
//               .then(data => alert('Donation history added:', data))
//               .catch(error => console.error(error));
//           } else {
//             console.log('Donation not updated');
//           }
      
//           fetch('http://10.102.136.134:5000/needy-donations', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ recipient_email: credentials?.user?.email })
//           })
//             .then(response => response.json())
//             .then(data => {
//               console.log(data);
//               setRows(data);
//               console.log(rows);
//             })
//             .catch(error => console.error(error));
      
//           fetch('http://10.102.136.134:5000/needy-donations', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ recipient_email: credentials?.user?.email })
//           })
//             .then(response => response.json())
//             .then(data => {
//               console.log(data);
//               setRows(data);
//               console.log(rows);
//             })
//             .catch(error => console.error(error));
      
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     };
  
//     const handleReject = async (row) => {
//       console.log(row._id);
//       // ...
//     };
  
//     return (
//       <ScrollView>
//       <View style={styles.table}>
//         <Text style={styles.tableHeader}>View Donations</Text>
//         <View style={styles.tableHeader}>
//           <Text style={styles.headerText}>Donor Name</Text>
//           <Text style={styles.headerText}>Donor Email</Text>
//           <Text style={styles.headerText}>Donation Type</Text>
//           <Text style={styles.headerText}>Quantity/Amount</Text>
//           <Text style={styles.headerText}>Donation Date</Text>
//           <Text style={styles.headerText}>Selection</Text>
//         </View>
        
//         {rows.map((row) => (
//           <View key={row._id} style={styles.tableRow}>
//             <Text tyle={styles.rowText}>{row.donor_name}</Text>
//             <Text tyle={styles.rowText}>{row.donor_email}</Text>
//             <Text tyle={styles.rowText}>{row.donation_type}</Text>
//             <Text tyle={styles.rowText}>{row.donation_type === "food" ? `${row.food_quantity} (${row.food_type})` : row.donation_type === 'money' ? `Rs. ${row.amount}` : `${row.cloth_quantity} (${row.cloth_quality}, ${row.cloth_type})`}</Text>
//             <Text tyle={styles.rowText}>{row.donation_date}</Text>
//             {/* Replace the TableCell components with TouchableOpacity */}
//             <TouchableOpacity style={styles.button} onPress={() => handleAccept(row)}>
//               <Text style={styles.buttonText}>Accept</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => handleReject(row)}>
//               <Text style={styles.buttonText}>Reject</Text>
//             </TouchableOpacity>
          
//           </View>
          
//         ))}

//       </View>
//       </ScrollView>
//     );
//   }
  

//   const styles = StyleSheet.create({
//     table: {
//       flex: 1,
//       padding: 10,
//     },
//     tableRow: {
//       flexDirection: 'row',
//       borderBottomWidth: 1,
//       borderColor: 'black',
//     },
//     tableHeader: {
//       flexDirection: 'row',
//       borderBottomWidth: 1,
//       borderColor: 'black',
//     },
//     tableCell: {
//       borderWidth: 0,
//     },
   
//     rowText: {
//       flex: 1,
//       textAlign: 'center',
//     },
//     headerText: {
//       flex: 1,
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//   });
  
  // Styles
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     padding: 20,
  //   },
  //   heading: {
  //     fontSize: 24,
  //     fontWeight: 'bold',
  //     marginBottom: 10,
  //   },
  //   row: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     alignItems: 'center',
  //     marginBottom: 10,
  //   },
  //   button: {
  //     backgroundColor: '#f2f2f2',
  //     padding: 10,
  //     borderRadius: 5,
  //     marginRight: 10,
  //   },
  //   buttonText: {
  //     fontWeight: 'bold',
  //   },
  // });
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity , FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { useLogin } from '../../LoginProvider';

export default function NeedyDonationOffers() {
  const [rows, setRows] = useState([]);
  const {credentials} = useLogin()
  useEffect(() => {
          fetch('http://10.102.144.107:5000/needy-donations', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ recipient_email: credentials?.user?.email }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setRows(data);
              console.log(rows);
            })
            .catch((error) => console.error(error));
        }, []);
        const handleAccept = async (row) => {
                console.log("id: ", row._id);
                
                  try {
                    const response = await fetch('http://10.102.144.107:5000/donations-update', {
                      method: 'PATCH',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({ id: row._id }),
                    });
                    const data = await response.json();
                
                    if (response.ok) {
                      const newRows = rows.filter(r => r.id !== row.id);
                      setRows(newRows);
                      console.log('user side', data);
                
                      fetch('http://10.102.144.107:5000/donation-history', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ ...data, email: credentials?.user?.email })
                      })
                        .then(response => response.json())
                        .then(data => alert('Donation history added:', data))
                        .catch(error => console.error(error));
                    } else {
                      console.log('Donation not updated');
                    }
                
                    fetch('http://10.102.144.107:5000/needy-donations', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({ recipient_email: credentials?.user?.email })
                    })
                      .then(response => response.json())
                      .then(data => {
                        console.log(data);
                        setRows(data);
                        console.log(rows);
                      })
                      .catch(error => console.error(error));
                
                    fetch('http://10.102.144.107:5000/needy-donations', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({ recipient_email: credentials?.user?.email })
                    })
                      .then(response => response.json())
                      .then(data => {
                        console.log(data);
                        setRows(data);
                        console.log(rows);
                      })
                      .catch(error => console.error(error));
                
                  } catch (error) {
                    console.error(error);
                  }
              };
  const handleReject = async (row) => {
                console.log(row._id);
                try {
                  const response = await fetch(`http://10.102.144.107:5000/donations/${row._id}`, {
                    method: 'DELETE',
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  });
              
                  if (response.ok) {
                    const newRows = rows.filter(r => r.id !== row.id);
                    setRows(newRows);
                    console.log('Donation record deleted');
                  } else {
                    console.log('Failed to delete donation record');
                  }
              
                  fetch('http://10.102.144.107:5000/needy-donations', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ recipient_email: credentials?.user?.email })
                  })
                    .then(response => response.json())
                    .then(data => {
                      console.log(data);
                      setRows(data);
                      console.log(rows);
                    })
                    .catch(error => console.error(error));
              
                } catch (error) {
                  console.error(error);
                }
              };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Donor Name</Text>
          <Text style={styles.headerText}>Donor Email</Text>
          <Text style={styles.headerText}>Donation Type</Text>
          <Text style={styles.headerText}>Quantity/Amount</Text>
          <Text style={styles.headerText}>Donation Date</Text>
          <Text style={styles.headerText}> selection </Text>
          
        </View>
        <FlatList
        data={rows}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.rowText}>{item.donor_name}</Text>
            <Text style={styles.rowText}>{item.donor_email}</Text>
            <Text style={styles.rowText}>{item.donation_type}</Text>
            
            <Text style={styles.rowText}>{item.donation_type === "food" ? `${item.food_quantity} (${item.food_type})` : item.donation_type === 'money' ? `Rs. ${item.amount}` : `${item.cloth_quantity} (${item.cloth_quality}, ${item.cloth_type})`}</Text>
            <Text style={styles.rowText}>{item.donation_date}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleAccept(item)}>
               <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
             <TouchableOpacity style={styles.button} onPress={() => handleReject(item)}>
              <Text style={styles.buttonText}>Reject</Text>
             </TouchableOpacity>
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
    textAlign: "left",
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  button: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
      },
      buttonText: {
        fontWeight: 'bold',
      },
});

