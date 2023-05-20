import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';

export const MainContainer = ({ children }) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme?.colors?.primaryBackground, flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right }}>
      {children}
    </View>
  )
}
export const SubContainer = ({ children }) => {
  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme?.colors?.secondaryBackground, elevation: 12, padding: 20, borderRadius: 8 }}>
      {children}
    </View>
  )
}