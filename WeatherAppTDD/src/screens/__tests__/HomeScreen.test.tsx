import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import WeatherCurrunt from '../components/WeatherCurrunt';
import {View} from 'react-native';
import WeatherCoordinates from '../components/WeatherCoordinates';

jest.mock('../components/WeatherCurrunt', () =>
  jest.fn().mockReturnValue(null),
);
jest.mock('../components/WeatherCoordinates', () =>
  jest.fn().mockReturnValue(null),
);

describe('HomeScreen', () => {
  test('should render correctly', () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('home-screen');
  });

  describe('Title section', () => {
    beforeEach(() => {
      jest.useFakeTimers('modern');
      jest.setSystemTime(946684800000);
    });
    afterEach(() => {
      jest.useRealTimers();
    });

    test('Should contain currunt date', () => {
      const wrapper = render(<HomeScreen />);
      wrapper.getByText('Jan 01,2000');
    });

    test('Should contain currunt day', () => {
      const wrapper = render(<HomeScreen />);
      wrapper.getByText('Saturday');
    });
  });

  test('Should contain a section to get currunt weather', () => {
    (WeatherCurrunt as jest.Mock).mockReturnValue(
      <View testID="mock-weather-currunt" />,
    );
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('mock-weather-currunt');
  });

  test('Should contain a divider', () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('home-screen-divider');
  });

  test('Should contain a section to get weather at given latitude & longitude', () => {
    (WeatherCoordinates as jest.Mock).mockReturnValue(
      <View testID="mock-weather-coordinates" />,
    );
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('mock-weather-coordinates');
  });
});
