import { View, Text, ScrollView, } from 'react-native'
import React, { Fragment, useState, } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import { ContainedButton } from '../UIComponent'
import HeaderComponent from './HeaderComponent';
import { PasswordInput } from '../UIComponent'
import { MainContainer, SubContainer, TextButton } from '../UIComponent'

const ForgotPasswordScreen = () => {
  const theme = useTheme();
  const { RegData } = useSelector(state => state?.ReducerSlicer)
  const Navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [value, setValue] = useState({ Password: '', ConfirmPassword: '' });

  const onSubmit = () => {
    Navigation.navigate('LoginScreen')
  };

  return (
    <Fragment>
      <FocusAwareStatusBar backgroundColor={theme?.statusbar?.backgroundColor} />
      <MainContainer>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 20 }}>
          <SubContainer>
            <HeaderComponent Title={'Reset Password'} showTitle={true} SubTitle={'enter your credentials to continue'} showSubTitle={true} />

            <PasswordInput placeholder={'New Password'} value={value?.Password} onChangeText={(Text) => setValue({ ...value, Password: Text })} />
            <PasswordInput placeholder={'Confirm Password'} value={value?.ConfirmPassword} onChangeText={(Text) => setValue({ ...value, ConfirmPassword: Text })} />
            {(!value?.Password || !value?.ConfirmPassword) ? null : (value?.Password !== value?.ConfirmPassword) ? <Text style={{ color: "red", fontSize: 12, fontFamily: 'OpenSans-Regular' }}>Password not same</Text> : null}

            <View style={{ paddingTop: 30 }}>
              <ContainedButton onPress={() => onSubmit()} disabled={!value?.Password || !value?.ConfirmPassword || (value?.Password !== value?.ConfirmPassword)} >
                <Text style={[{ textAlign: 'center', color: '#ffffff', fontFamily: 'OpenSans-SemiBold', fontSize: 16 }]}>Reset Password</Text>
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

export default ForgotPasswordScreen