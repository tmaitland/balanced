import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import { View } from './Themed';

export default function Cards({cardTitle, cardContent, name, size, color}: {cardTitle: string, cardContent: string, name: any, size: number, color: string}) {
    return (
      <View>
        <Card style={styles.card}>
          <Card.Content>
            <FontAwesome
                    name={name}
                    size={size}
                    color={color}
                    style={styles.icon}
                  />
              <Title style={styles.title}>{cardTitle}</Title>
            <Paragraph>{cardContent}</Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  }

const styles = StyleSheet.create({
  card: {
    padding: 3,
    margin: 5,
  },
  icon: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 8,
    top: 20,
  },
  title: {
    backgroundColor: 'transparent',
    position: 'relative',
    fontWeight: 'bold',
    left: 20,
    top: 0,
  },
  
});