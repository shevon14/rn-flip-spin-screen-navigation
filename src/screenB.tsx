import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ScreenB = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen B</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('screenC');
        }}>
        <Text>Navigate to Screen C</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC300',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ScreenB;
