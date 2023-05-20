import React, { Fragment, useRef } from 'react';
import 'react-native-gesture-handler';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import { HomeScreen, AccountScreen, SettingScreen, MapAnimation, MapMarker } from '../AppScreens'


const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  const theme = useTheme();

  return (
    <Fragment>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          tabBarInactiveTintColor: '#67748E',
          tabBarActiveTintColor: '#4646F2',
          tabBarStyle: { position: 'absolute', bottom: 15, borderWidth: 1, borderColor: theme?.bottomNavigation?.borderColor, marginHorizontal: 15, borderRadius: 20, height: 60, backgroundColor: theme?.bottomNavigation?.backgroundColor, },
          tabBarHideOnKeyboard: true,
          tabBarVisible: true,
          tabBarShowLabel: false,
          safeAreaInset: {
            bottom: "always"
          },
        }}
      >
        <Tab.Screen
          name="SettingScreen"
          component={SettingScreen}
          initialParams={{}}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Setting',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View style={{
                backgroundColor: focused ? theme?.bottomNavigation?.activeCircle : 'transparent',
                height: 40, width: 40, borderRadius: 100, justifyContent: "center", alignItems: "center"
              }}>
                <Feather name="settings" color={color} size={20} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="AccountScreen"
          component={AccountScreen}
          initialParams={{}}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Account',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View style={{
                backgroundColor: focused ? theme?.bottomNavigation?.activeCircle : 'transparent',
                height: 40, width: 40, borderRadius: 100, justifyContent: "center", alignItems: "center"
              }}>
                <FontAwesome name="user-o" color={color} size={20} />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          initialParams={{}}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View style={{
                backgroundColor: focused ? theme?.bottomNavigation?.activeCircle : 'transparent',
                height: 40, width: 40, borderRadius: 100, justifyContent: "center", alignItems: "center"
              }}>
                <Octicons name="home" color={color} size={20} />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="MapMarker"
          component={MapMarker}
          initialParams={{}}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Account',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View style={{
                backgroundColor: focused ? theme?.bottomNavigation?.activeCircle : 'transparent',
                height: 40, width: 40, borderRadius: 100, justifyContent: "center", alignItems: "center"
              }}>
                <MaterialCommunityIcons name="map-marker-outline" color={color} size={24} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="MapAnimation"
          component={MapAnimation}
          initialParams={{}}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Account',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View style={{
                backgroundColor: focused ? theme?.bottomNavigation?.activeCircle : 'transparent',
                height: 40, width: 40, borderRadius: 100, justifyContent: "center", alignItems: "center"
              }}>
                <MaterialCommunityIcons name="animation-outline" color={color} size={24} />
              </View>
            ),
          }}
        />




      </Tab.Navigator>
    </Fragment>
  )
}

export default BottomNavigation