import { View, Text, ScrollView, } from 'react-native'
import React, { Fragment, useState, } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'react-native-paper';
import { ContainedButton } from '../UIComponent'
import HeaderComponent from './HeaderComponent'
import { EmailInput, } from '../UIComponent'
import { useDispatch } from 'react-redux';
import { setRegData } from '../store/ReducerSlicer'
import { MainContainer, SubContainer, TextButton } from '../UIComponent'

const ForgotEmailScreen = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const Navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [value, setValue] = useState({ Email: '' });

  const onSubmit = () => {
    dispatch(setRegData(value));
    Navigation.navigate('ForgotVerifyScreen')
  };

  return (
    <Fragment>
      <FocusAwareStatusBar backgroundColor={theme?.statusbar?.backgroundColor} />
      <MainContainer>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 20 }}>
          <SubContainer style={{ backgroundColor: '#FFFFFF', elevation: 12, padding: 20, borderRadius: 8 }}>
            <HeaderComponent Title={'Forgot Password'} showTitle={true} SubTitle={'enter your credentials to continue'} showSubTitle={true} />

            <EmailInput placeholder={'Email'} value={value?.Email} onChangeText={(Text) => setValue({ ...value, Email: Text })} />

            <View style={{ paddingTop: 30 }}>
              <ContainedButton onPress={() => onSubmit()} disabled={!value?.Email} >
                <Text style={[{ textAlign: 'center', color: '#ffffff', fontFamily: 'OpenSans-SemiBold', fontSize: 16 }]}>Send OTP</Text>
              </ContainedButton>
            </View>

            <View style={{ paddingTop: 20, width: "100%", }}>
              <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: "#666C8E", fontSize: 16, fontFamily: "OpenSans-Regular" }}>Already have an account? </Text>
                <TextButton onPress={() => Navigation.goBack()}>
                  Log In
                </TextButton>
              </View>
            </View>
          </SubContainer>
        </ScrollView>
      </MainContainer>
    </Fragment>
  )
}

export default ForgotEmailScreen