import React, { useEffect } from 'react';
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View, ActivityIndicator, useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CombineRoute from './CombineRoute'
import { setGetTheme } from './store/ReducerSlicer'
import { themeLight, themeDark } from './Theme'

const ThemingScreen = () => {
  const color = useColorScheme()
  const dispatch = useDispatch();
  const { getTheme } = useSelector(state => state?.ReducerSlicer)

  const isTheme = (value) => {
    switch (getTheme) {
      case 'default':
        return themeLight
        break;
      case 'light':
        return themeLight
        break;
      case 'dark':
        return themeDark
        break;
      default:
        return themeLight
        break;
    }
  };

  useEffect(() => {
    dispatch(setGetTheme(color))
  }, [color]);

  return (
    <PaperProvider theme={isTheme()}>
      <SafeAreaProvider>
        <NavigationContainer fallback={
          <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar barStyle='dark-content' backgroundColor={'#FFFFFF'} />
            <ActivityIndicator size={'large'} color={'#F25555'} />
          </View>
        }>
          <CombineRoute />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  )
}

export default ThemingScreen