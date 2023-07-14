import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ShowProjects = (props) => {
  
  return (
    <>
    <View style={styles.card}>
      <Text style={styles.title}>{props.post.title}</Text>
      <Text style={styles.description}>{props.post.description}</Text>
      <Button style={styles.button}>Donate</Button>
    </View>
     
   </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    fontSize: 18,
    color: "black",
    padding: 20 
  }
});

export default ShowProjects;

