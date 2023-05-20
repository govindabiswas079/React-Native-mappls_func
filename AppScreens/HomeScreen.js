import React, { Fragment, } from 'react';
import { View, ScrollView, Text, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'react-native-paper';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import { MainContainer } from '../UIComponent'

const HomeScreen = () => {
  const theme = useTheme();
  const Navigation = useNavigation();

  return (
    <Fragment>
      <FocusAwareStatusBar backgroundColor={theme?.statusbar?.backgroundColor} />
      <MainContainer>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 20 }}>
          <Button onPress={() => AsyncStorage.removeItem('isAuth')} mode="contained" labelStyle={{ fontFamily: 'OpenSans-SemiBold', fontSize: 14, color: '#FFFFFF' }} style={{ backgroundColor: '#A1A2F2', borderRadius: 8, height: 40, }}>
            Button
          </Button>
          
        </ScrollView>
      </MainContainer>
    </Fragment>
  )
}

export default HomeScreen