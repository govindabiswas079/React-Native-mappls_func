import { View, Text, ScrollView, } from 'react-native'
import React, { Fragment, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useTheme } from 'react-native-paper';
import { ContainedButton } from '../UIComponent'
import HeaderComponent from './HeaderComponent'
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import { MainContainer, SubContainer, TextButton } from '../UIComponent'

const VerifyScreen = () => {
  const theme = useTheme();
  const Navigation = useNavigation();
  const [value, setValue] = useState({ otp: '' })

  const onVerify = () => {
    Navigation.navigate('LoginScreen')
  };

  return (
    <Fragment>
      <FocusAwareStatusBar backgroundColor={theme?.statusbar?.backgroundColor} />
      <MainContainer>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 20 }}>
          <SubContainer style={{ backgroundColor: '#FFFFFF', elevation: 12, padding: 20, borderRadius: 8 }}>
            <HeaderComponent Title={'OTP Verify'} showTitle={true} showSubTitle={true} SubTitle={'Enter 4 digit otp send to your mobile'} />

            <OTPInputView
              placeholderCharacter={'-'}
              placeholderTextColor={'#7C82A1'}
              style={{ width: '100%', height: 100, }}
              pinCount={4}
              code={value.otp}
              onCodeChanged={(OTP) => { setValue({ ...value, otp: OTP }) }}
              codeInputFieldStyle={{ width: 52, height: 52, borderWidth: 1, borderRadius: 10, backgroundColor: '#F3F4F6', borderColor: '#F3F4F6', color: '#333647', fontFamily: "SF-Pro-Text-Semibold", fontSize: 16 }}
              codeInputHighlightStyle={{ borderColor: "#475AD7", color: "#475AD7", fontFamily: "SF-Pro-Text-Semibold", fontSize: 16 }}
              onCodeFilled={(code => {

              })}
            />

            <ContainedButton onPress={() => onVerify()} disabled={value.otp?.length !== 4}>
              <Text style={[{ textAlign: 'center', color: '#ffffff', fontFamily: 'OpenSans-SemiBold', fontSize: 16 }]}>Verify</Text>
            </ContainedButton>

            <View style={{ paddingTop: 20, width: "100%", }}>
              <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: "#666C8E", fontSize: 16, fontFamily: "OpenSans-Regular" }}>Didn't receive an email? </Text>
                <TextButton onPress={() => { }}>
                  Send again
                </TextButton>
              </View>
            </View>
          </SubContainer>
        </ScrollView>
      </MainContainer>
    </Fragment>
  )
}

export default VerifyScreen