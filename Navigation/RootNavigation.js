import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen, VerifyScreen, ForgotEmailScreen, ForgotVerifyScreen, ForgotPasswordScreen, } from '../RootScreens'
import { forSlideAnimate, configAnimate } from './NavigationAnimate';

const Stack = createStackNavigator();
const RootNavigation = () => {

  return (
    <Fragment>
      <Stack.Navigator screenOptions={{ headerShown: false, transitionSpec: { open: configAnimate, close: configAnimate }, cardStyleInterpolator: forSlideAnimate, /* presentation: 'modal', headerShown: false, gestureDirection: 'horizontal', cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, gestureEnabled: false, */ }}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='VerifyScreen' component={VerifyScreen} />
        <Stack.Screen name='ForgotEmailScreen' component={ForgotEmailScreen} />
        <Stack.Screen name='ForgotVerifyScreen' component={ForgotVerifyScreen} />
        <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </Fragment>
  )
}

export default RootNavigation