import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment';

import {Colors} from '../constants';
import WeatherCurrunt from './components/WeatherCurrunt';
import WeatherCoordinates from './components/WeatherCoordinates';

const HomeScreen = () => {
  const now = moment(new Date());

  return (
    <View testID="home-screen" style={styles.container}>
      <View testID="test-sample">
        <Text style={styles.txtDate}>{now.format('MMM DD,YYYY')}</Text>
        <Text>{now.format('dddd')}</Text>
      </View>
      <WeatherCurrunt />
      <Text testID="home-screen-divider">Or</Text>
      <WeatherCoordinates />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: Colors.DARKER_GRAY,
    alignContent: 'space-between',
    padding: 16,
  },
  txtDate: {
    color: Colors.GRAY,
  },
});

export default HomeScreen;
