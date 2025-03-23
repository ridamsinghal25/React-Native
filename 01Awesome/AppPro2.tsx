import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello World
        </Text>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello World
        </Text>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello World
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // justify content works top to bottom in react-native
    alignItems: 'flex-end', // align items works left to right in react-native
    // But in web justify content works left to right
    // and align items works top to bottom
  },
  whiteText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
});

export default AppPro;
