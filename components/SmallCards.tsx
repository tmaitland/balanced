import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { View } from './Themed';

export default function SmallCards({cardTitle, cardWidth, cardHeight, cardContent}: {cardTitle: string, cardWidth: any, cardHeight: any, cardContent: string}) {
    return (
      <View>
        <Card style={[styles.card, {width: cardWidth, height: cardHeight}]}>
          <Card.Content>
            <Title style={styles.title}>{cardTitle}</Title>
            <Paragraph style={styles.paragraph}>{cardContent}</Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  }

const styles = StyleSheet.create({
  card: {
    margin: 5,
    paddingBottom: 5,
  },
  title: {
    backgroundColor: 'transparent',
    position: 'relative',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 12,
    lineHeight: 15,
  },
  
});