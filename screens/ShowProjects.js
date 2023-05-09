import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ShowActiveProjects = () => {
  const data = [
    {
      id: 1,
      name: 'NGO 1',
      description: 'This is the first project description',
      date: '01',
      month: 'Jan',
    },
    {
      id: 2,
      name: 'NGO 2',
      description: 'This is the second project description',
      date: '15',
      month: 'Feb',
    },
    {
      id: 3,
      name: 'NGO 3',
      description: 'This is the third project description',
      date: '10',
      month: 'Mar',
    },
    {
      id: 4,
      name: 'NGO 4',
      description: 'This is the fourth project description',
      date: '20',
      month: 'Apr',
    },
    {
      id: 5,
      name: 'NGO 5',
      description: 'This is the fifth project description',
      date: '27',
      month: 'Apr',
    },
    {
      id: 6,
      name: 'NGO 6',
      description: 'This is the sixth project description',
      date: '26',
      month: 'Apr',
    },
    {
      id: 7,
      name: 'NGO 7',
      description: 'This is the seventh project description',
      date: '26',
      month: 'Apr',
    },
  ];

  const renderCards = () => {
    return data.map((item) => {
      return (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>{item.name}</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardBodyText}>{item.description}</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardFooterText}>
                {item.date} {item.month}
              </Text>
              <TouchableOpacity style={styles.donateButton}>
                <Text style={styles.donateButtonText}>Donate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    });
  };

  return  <ScrollView><View style={styles.container}>{renderCards()}</View></ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  cardHeader: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingBottom: 10,
  },
  cardHeaderText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardBody: {},
  cardBodyText: {
    color: '#555',
    fontSize: 16,
    marginBottom: 10,
  },
  cardFooter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardFooterText: {
    color: '#999',
    fontSize: 14,
  },
  donateButton: {
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
    padding: 5,
  },
  donateButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ShowActiveProjects;

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// export default function ShowActiveProjects() {
//   const data = [
//     {
//       name: 'NGO 1',
//       description: 'This is the description for NGO 1',
//       date: '17',
//       month: 'APR',
//     },
//     {
//       name: 'Needy Person 1',
//       description: 'This is the description for Needy Person 1',
//       date: '20',
//       month: 'APR',
//     },
//     {
//       name: 'NGO 2',
//       description: 'This is the description for NGO 2',
//       date: '25',
//       month: 'APR',
//     },
//     {
//       name: 'Needy Person 2',
//       description: 'This is the description for Needy Person 2',
//       date: '30',
//       month: 'APR',
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       {data.map((item, index) => (
//         <View key={index} style={styles.card}>
//           <Text style={styles.name}>{item.name}</Text>
//           <Text style={styles.description}>{item.description}</Text>
//           <View style={styles.footer}>
//             <Text style={styles.date}>{item.date}</Text>
//             <Text style={styles.month}>{item.month}</Text>
//             <TouchableOpacity style={styles.button}>
//               <Text style={styles.buttonText}>Donate</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   card: {
//     backgroundColor: '#ffffff',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   name: {
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   description: {
//     marginBottom: 10,
//   },
//   footer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   date: {
//     flex: 1,
//     fontWeight: 'bold',
//   },
//   month: {
//     flex: 1,
//     textAlign: 'right',
//     fontWeight: 'bold',
//   },
//   button: {
//     backgroundColor: '#007aff',
//     borderRadius: 5,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     marginLeft: 10,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontWeight: 'bold',
//   },
// });
