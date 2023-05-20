import React from "react";
import { StatusBar, Platform, View } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from 'react-native-paper';

export function FocusAwareStatusBar(props) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();

  return isFocused ?
    Platform?.OS == 'ios' ?
      <View style={{ height: insets?.insets, width: '100%', backgroundColor: props?.backgroundColor }}>
        <StatusBar barStyle={theme?.statusbar?.barStyle} {...props} />
      </View>
      :
      <StatusBar barStyle={theme?.statusbar?.barStyle} {...props} />
    : null;
}