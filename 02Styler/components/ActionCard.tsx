import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in JavaScript 24 - ES15
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text>
            Just like every year, JavaScript is getting better. JavaScript is
            bringing new features which are almost in production.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://google.com')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://google.com')}>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginVertical: 10,
  },
  elevated: {
    backgroundColor: '#EAF0F1',
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    paddingHorizontal: 8,
    backgroundColor: '#CAD5E2',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  headerText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    padding: 8,
  },
  cardImage: {
    height: 200,
    marginBottom: 8,
  },
  bodyContainer: {
    paddingHorizontal: 8,
    fontSize: 13,
    marginBottom: 12,
  },
  footerContainer: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    justifyContent: 'space-evenly',
    elevation: 5,
  },
  socialLinks: {
    fontSize: 14,
    backgroundColor: '#CAD5E2',
    padding: 8,
    borderRadius: 4,
    cursor: 'pointer',
  },
});
