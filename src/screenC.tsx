import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ScreenC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen C</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('screenA');
        }}>
        <Text>Navigate to Screen A</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5733',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ScreenC;
