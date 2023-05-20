import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation'
import { forSlideAnimate, configAnimate } from './NavigationAnimate';

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <Fragment>
      <Stack.Navigator screenOptions={{ headerShown: false, transitionSpec: { open: configAnimate, close: configAnimate }, cardStyleInterpolator: forSlideAnimate, /* presentation: 'modal', headerShown: false, gestureDirection: 'horizontal', cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, gestureEnabled: false, */ }}>
        <Stack.Screen name='Root' component={BottomNavigation} />
      </Stack.Navigator>
    </Fragment>
  )
}

export default AppNavigation