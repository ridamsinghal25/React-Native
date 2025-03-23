import React from 'react';

import {Text, View, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={{color: isDarkMode ? 'white' : 'black'}}>Hello World</Text>
    </View>
  );
}

export default AppPro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // justify content works top to bottom in react native
    alignItems: 'flex-start', // align items works left to right in react native
    // But in web justify content works left to right
    // and align items works top to bottom
    color: 'white',
  },
});
