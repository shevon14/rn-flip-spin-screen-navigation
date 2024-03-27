import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ScreenA = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen A</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('screenB');
        }}>
        <Text>Navigate to Screen B</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008080',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ScreenA;
