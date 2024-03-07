import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';
// import { ExternalLink } from './ExternalLink';

// import { openURL } from 'expo-linking';

export default function MediaCards({source, cardTitle, cardText}: {cardTitle: string, source: string, cardText: string}) {
    return (
        <Card mode='elevated' style={styles.card}>
            <Card.Cover style={styles.imageSize} source={{ uri: source }} />
            <Card.Content>
                <Title style={styles.title}>{cardTitle}</Title>
                <Paragraph>{cardText}</Paragraph>
            </Card.Content>
        </Card>  
    );
}

const styles = StyleSheet.create({
  card: {
    padding: 3,
    margin: 5,
    width: "auto",
    height: "auto",
  },
  title : {
    fontSize: 16,
    padding: 5,
  },
  imageSize: {
    width: "auto",
    height: 200,
    objectFit: 'cover',
    
  },
  
});