import React from 'react';
import { Card, Title, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { ExternalLink } from './ExternalLink';

// import { openURL } from 'expo-linking';

export default function ArticleCards({extLink, cardTitle}: {cardTitle: string, extLink: string}) {
    return (
        <Card mode='elevated' style={styles.card}>
            <Card.Cover source={require('../assets/images/books-susan-q-yin.jpg')} />
            <ExternalLink href={extLink}>
            <Card.Content>
                <Title style={styles.title}>{cardTitle}</Title>
            </Card.Content>
            </ExternalLink>
        </Card>  
    );
}

const styles = StyleSheet.create({
  card: {
    padding: 3,
    margin: 5,
    width: 200,
    height: "auto",
  },
  title : {
    fontSize: 16,
    padding: 5,
  }
  
});