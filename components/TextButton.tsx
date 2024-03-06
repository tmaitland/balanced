import React from 'react';
import { Title, Button } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
import { View } from './Themed';

export default function TextButton({title, buttonText, onPress}: {title: string, buttonText: string, onPress: any}) {
    return (
      <View style={styles.container}>
        <Title style={styles.title}>{title}</Title>
        <Button style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Button>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'gray',
      margin: 10,
    },
    button: {
      backgroundColor: 'gray',
      flexDirection: 'column',
      margin: 10,
      padding: 5,
      width: "50%"
    },
    buttonText: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
      color: '#fafafa'
    },
  });