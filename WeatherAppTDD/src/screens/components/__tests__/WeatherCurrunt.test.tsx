import React from 'react';
import {render} from '@testing-library/react-native';
import WeatherCurrunt from '../WeatherCurrunt';

describe('WeatherCurrunt', () => {
  test('Should render correctly', () => {
    const wrapper = render(<WeatherCurrunt />);
    wrapper.getByTestId('weather-currunt');
  });
});
