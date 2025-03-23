import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  const cities = [
    {
      uid: 1,
      name: 'Hawa Mahal',
      imageUrl:
        'https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.jpg?s=1024x1024&w=is&k=20&c=NVM5bBGtxyrKv8zNKBfcgdlNHfkYkEa-LADVjQXLV3Q=',
      location: 'Pink City, Jaipur',
      description:
        'The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink marble, it is the largest building in the world by volume.',
      distance: '12 mins away',
    },
    {
      uid: 2,
      name: 'Gateway of India',
      imageUrl:
        'https://images.unsplash.com/photo-1625731226721-b4d51ae70e20?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Mumbai',
      description:
        'The Gateway of India is an iconic monument located in Mumbai. It was built to commemorate the visit of King George V and Queen Mary.',
      distance: '30 mins away',
    },
    {
      uid: 3,
      name: 'Mysore Palace',
      imageUrl:
        'https://images.unsplash.com/photo-1657856855186-7cf4909a4f78?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Mysore',
      description:
        'Mysore Palace is a historical palace and the royal residence of the Wadiyar dynasty in Mysore, Karnataka.',
      distance: '1 hour away',
    },
    {
      uid: 4,
      name: 'Charminar',
      imageUrl:
        'https://images.unsplash.com/photo-1711102230980-5f3001c1a07b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Hyderabad',
      description:
        'The Charminar is a historic mosque and monument located in Hyderabad, Telangana. It is a global icon of Hyderabad.',
      distance: '15 mins away',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <ScrollView horizontal>
        {cities.map(
          ({uid, name, imageUrl, location, description, distance}) => (
            <View style={[styles.card, styles.cardElevated]} key={uid}>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={styles.cardImage}
              />
              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardLabel}>{location}</Text>
                <Text style={styles.cardDescription}>{description}</Text>
                <Text style={styles.cardFooter}>{distance}</Text>
              </View>
            </View>
          ),
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    height: 360,
    width: 380,
    marginHorizontal: 16,
    borderRadius: 6,
    marginVertical: 12,
    borderBottomEndRadius: 6,
    borderBottomStartRadius: 6,
  },
  cardElevated: {
    backgroundColor: '#fff',
    elevation: 5,
    // shadowOffset: {
    //   width: 10,
    //   height: 10,
    // },
  },
  cardImage: {
    height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    paddingHorizontal: 12,
    flex: 1,
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 13,
    marginBottom: 12,
  },
  cardFooter: {
    textAlign: 'right',
  },
});
