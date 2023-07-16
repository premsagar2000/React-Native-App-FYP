import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLogin } from '../../LoginProvider';
const ProfileDonor = () => {
  const { credentials } = useLogin()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{credentials?.user ? credentials?.user?.name : "Name"}</Text>
          <Text style={styles.bio}>Needy</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Email:</Text>
          <Text style={styles.detailValue}>{credentials?.user ? credentials?.user?.email : "email"}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Phone:</Text>
          <Text style={styles.detailValue}>{credentials?.user ? credentials?.user?.phone : 'phone'}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>CNIC:</Text>
          <Text style={styles.detailValue}>{credentials?.user ? credentials?.user?.cnic:'1234566'}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Location:</Text>
          <Text style={styles.detailValue}>{credentials?.user ? credentials?.user?.address : 'address'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  headerInfo: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#555',
  },
  details: {
    flexDirection: 'column',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    minWidth: 80,
  },
  detailValue: {
    fontSize: 16,
  },
});

export default ProfileDonor;
