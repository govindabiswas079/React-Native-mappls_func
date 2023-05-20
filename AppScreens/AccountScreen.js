import React, { Fragment, } from 'react';
import { View, ScrollView, Text, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'react-native-paper';
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import { MainContainer } from '../UIComponent'

const AccountScreen = () => {
  const theme = useTheme();
  const Navigation = useNavigation();

  return (
    <Fragment>
      <FocusAwareStatusBar backgroundColor={theme?.statusbar?.backgroundColor} />
      <MainContainer>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 20 }}>
        </ScrollView>
      </MainContainer>
    </Fragment>
  )
}

export default AccountScreen